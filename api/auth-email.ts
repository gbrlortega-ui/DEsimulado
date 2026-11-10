/**
 * Envio próprio dos e-mails de conta (Outras ferramentas).
 *
 * Por que existe: o projeto Firebase "desimulados-ferramentas" não permite editar os
 * modelos de e-mail (EMAIL_TEMPLATE_UPDATE_NOT_ALLOWED) e os links que ele manda saem
 * com apiKey vazio — a página padrão do Firebase dá "The selected page mode is invalid".
 * Aqui o Firebase só gera o código (oobCode); o link aponta para a página do próprio
 * site (src/tools/AuthAction.tsx) e o e-mail sai pelo Resend.
 *
 * POST /api/auth-email
 *   { "type": "verify" }                 + Authorization: Bearer <ID token do aluno>
 *   { "type": "reset", "email": "..." }  (sem login)
 *
 * Variáveis de ambiente na Vercel:
 *   FIREBASE_SERVICE_ACCOUNT  conteúdo do .json da conta de serviço
 *   RESEND_API_KEY            chave re_... do Resend
 *   MAIL_FROM   (opcional)    padrão: DEsimulados <nao-responda@desimulados.com.br>
 *   SITE_URL    (opcional)    padrão: https://www.desimulados.com.br
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const SITE_URL = (process.env.SITE_URL || 'https://www.desimulados.com.br').replace(/\/+$/, '');
const MAIL_FROM = process.env.MAIL_FROM || 'DEsimulados <nao-responda@desimulados.com.br>';
const GREEN = '#00bf75';

function adminAuth() {
  if (!getApps().length) {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT ausente');
    initializeApp({ credential: cert(JSON.parse(raw)) });
  }
  return getAuth();
}

/** Pega o oobCode do link gerado pelo Firebase e monta o link do próprio site. */
function siteLink(firebaseLink: string, mode: 'verifyEmail' | 'resetPassword') {
  const code = new URL(firebaseLink).searchParams.get('oobCode');
  if (!code) throw new Error('oobCode ausente no link do Firebase');
  return `${SITE_URL}/?mode=${mode}&oobCode=${encodeURIComponent(code)}`;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function emailHtml(title: string, intro: string, button: string, link: string, outro: string) {
  return `<!doctype html><html lang="pt-BR"><body style="margin:0;background:#f6f8f7;font-family:Arial,Helvetica,sans-serif;color:#1d2a25">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#fff;border:1px solid #e3e9e6;border-radius:16px;padding:32px">
<tr><td style="font-size:18px;font-weight:800;padding-bottom:24px"><span style="display:inline-block;width:28px;height:28px;border-radius:8px;background:${GREEN};color:#fff;text-align:center;line-height:28px;margin-right:8px">&#9889;</span>DEsimulados</td></tr>
<tr><td style="font-size:20px;font-weight:700;padding-bottom:12px">${esc(title)}</td></tr>
<tr><td style="font-size:15px;line-height:1.55;color:#3a4a44;padding-bottom:24px">${intro}</td></tr>
<tr><td style="padding-bottom:24px"><a href="${link}" style="display:inline-block;background:${GREEN};color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:12px 22px;border-radius:10px">${esc(button)}</a></td></tr>
<tr><td style="font-size:13px;line-height:1.5;color:#6b7a74">${outro}<br><br>Se o botão não funcionar, copie este endereço no navegador:<br><a href="${link}" style="color:#2f7d5c;word-break:break-all">${link}</a></td></tr>
</table></td></tr></table></body></html>`;
}

async function sendMail(to: string, subject: string, html: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY ausente');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: MAIL_FROM, to: [to], subject, html, text }),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${(await r.text()).slice(0, 300)}`);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method-not-allowed' });

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) ?? {};
  const type = body.type;

  try {
    const auth = adminAuth();

    if (type === 'verify') {
      const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
      if (!token) return res.status(401).json({ error: 'unauthenticated' });
      const user = await auth.getUser((await auth.verifyIdToken(token)).uid);
      if (!user.email) return res.status(400).json({ error: 'no-email' });
      if (user.emailVerified) return res.status(200).json({ ok: true, alreadyVerified: true });

      const link = siteLink(await auth.generateEmailVerificationLink(user.email), 'verifyEmail');
      const nome = esc((user.displayName || '').split(' ')[0] || 'aluno(a)');
      await sendMail(
        user.email,
        'Confirme seu e-mail no DEsimulados',
        emailHtml(
          'Confirme seu e-mail',
          `Olá, ${nome}! Falta só um passo para deixar sua conta das Outras ferramentas completa. Toque no botão abaixo para confirmar este endereço de e-mail.`,
          'Confirmar e-mail',
          link,
          'Se você não criou uma conta no DEsimulados, pode ignorar esta mensagem.',
        ),
        `Confirme seu e-mail no DEsimulados: ${link}`,
      );
      return res.status(200).json({ ok: true });
    }

    if (type === 'reset') {
      const email = String(body.email || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'invalid-email' });
      let firebaseLink: string;
      try {
        firebaseLink = await auth.generatePasswordResetLink(email);
      } catch (err) {
        // Não revela se o e-mail tem conta: responde igual nos dois casos.
        if ((err as { code?: string }).code === 'auth/user-not-found' || (err as { code?: string }).code === 'auth/email-not-found') {
          return res.status(200).json({ ok: true });
        }
        throw err;
      }
      const link = siteLink(firebaseLink, 'resetPassword');
      await sendMail(
        email,
        'Redefina sua senha do DEsimulados',
        emailHtml(
          'Redefinir senha',
          'Recebemos um pedido para criar uma nova senha para a sua conta das Outras ferramentas. Toque no botão abaixo para escolher a nova senha. O link vale por 1 hora.',
          'Criar nova senha',
          link,
          'Se não foi você quem pediu, ignore esta mensagem: sua senha atual continua valendo.',
        ),
        `Redefina sua senha do DEsimulados: ${link}`,
      );
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'invalid-type' });
  } catch (err) {
    const code = (err as { code?: string }).code ?? '';
    console.error('[auth-email]', type, code, (err as Error).message);
    if (code === 'auth/too-many-requests' || /RESET_PASSWORD_EXCEED_LIMIT|TOO_MANY/i.test((err as Error).message)) {
      return res.status(429).json({ error: 'too-many-requests' });
    }
    if (code === 'auth/id-token-expired' || code === 'auth/argument-error') {
      return res.status(401).json({ error: 'unauthenticated' });
    }
    return res.status(500).json({ error: 'send-failed' });
  }
}
