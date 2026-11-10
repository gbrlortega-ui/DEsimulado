import React from 'react';
import { Home } from 'lucide-react';
import { Brand } from './Brand';

interface PrivacyPolicyProps {
  onHome: () => void;
}

const EMAIL = 'gbrl.ortega@hotmail.com';

const Name = () => <span translate="no">DEsimulados</span>;

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="text-2xl font-extrabold text-ink">{title}</h2>
    <div className="mt-3 space-y-3 text-ink-2 leading-relaxed">{children}</div>
  </section>
);

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen bg-bg pb-16">
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between">
          <Brand onClick={onHome} />
          <button onClick={onHome} className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5">
            <Home size={15} />
            Início
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted">Vigente a partir de 10 de novembro de 2026 · Última atualização: 10 de novembro de 2026</p>

        <div className="mt-6 rounded-xl bg-primary-soft border border-line px-5 py-4 text-ink-2 leading-relaxed">
          <strong className="text-primary-ink">Resumo:</strong> o <Name /> funciona sem cadastro. Sem login, seus
          simulados ficam só no seu navegador. Se você escolher entrar com o Google, guardamos seu histórico para
          sincronizar entre aparelhos — e você pode apagar tudo a qualquer momento. Não vendemos dados, não temos
          anúncios e não usamos cookies de rastreamento.
        </div>

        <p className="mt-6 text-ink-2 leading-relaxed">
          Esta política explica, em linguagem simples, quais dados o <Name /> (
          <a href="https://www.desimulados.com.br" className="text-primary-ink underline">www.desimulados.com.br</a>)
          trata, por quê e quais são os seus direitos, de acordo com a Lei Geral de Proteção de Dados Pessoais
          (LGPD — Lei nº 13.709/2018).
        </p>

        <Section title="1. Quem somos e como falar conosco">
          <p>
            O <Name /> é um site gratuito de simulados para estudantes de Medicina, com questões do Teste de
            Progresso e do ENAMED. O controlador dos dados pessoais é o responsável pelo <Name />.
          </p>
          <p>
            Para dúvidas, pedidos ou reclamações sobre privacidade, escreva para{' '}
            <a href={`mailto:${EMAIL}`} className="text-primary-ink underline">{EMAIL}</a>.
          </p>
        </Section>

        <Section title="2. Uso sem cadastro">
          <p>
            Você pode usar o <Name /> sem criar conta. Nesse caso, o histórico de simulados e o simulado em
            andamento ficam guardados apenas no seu navegador (armazenamento local, o chamado localStorage) e
            <strong> não são enviados para nenhum servidor</strong>.
          </p>
          <p>
            Para apagar esses dados, basta limpar os dados de navegação do site ou usar a opção “apagar histórico”
            no próprio <Name />. Depois disso, nada fica guardado.
          </p>
        </Section>

        <Section title="3. Conta opcional (login com Google)">
          <p>
            Se você escolher entrar, o login é feito pelo Google, por meio do Firebase Authentication. Nós{' '}
            <strong>não pedimos nem recebemos sua senha</strong>. Quando você entra, tratamos:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dados da conta:</strong> nome, e-mail e identificador da sua conta Google.</li>
            <li>
              <strong>Histórico de simulados</strong> (no banco de dados Cloud Firestore, do Google): data, área ou
              título do simulado, nota, acertos, total de questões, tempo gasto e acertos por área.
            </li>
            <li>
              <strong>Simulado em andamento:</strong> questões sorteadas, respostas marcadas, posição atual e tempo.
            </li>
          </ul>
          <p>
            <strong>Finalidade:</strong> sincronizar o seu progresso entre aparelhos (por exemplo, começar no
            celular e continuar no computador).
          </p>
          <p>
            <strong>Base legal:</strong> o seu consentimento (art. 7º, I, da LGPD), dado ao escolher entrar, e a
            execução do serviço que você mesmo pediu (art. 7º, V). Você pode revogar o consentimento a qualquer
            momento excluindo a conta.
          </p>
        </Section>

        <Section title="4. O que não fazemos">
          <ul className="list-disc pl-5 space-y-1">
            <li>Não vendemos seus dados nem os compartilhamos para publicidade.</li>
            <li>Não usamos cookies de rastreamento nem exibimos anúncios.</li>
            <li>Não coletamos dados de saúde de pacientes.</li>
          </ul>
        </Section>

        <Section title="5. Com quem os dados são tratados">
          <p>Para funcionar, o <Name /> conta com alguns provedores (operadores), que tratam dados em nosso nome:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Google</strong> (Firebase Authentication e Cloud Firestore): login e armazenamento dos dados
              de quem tem conta.
            </li>
            <li>
              <strong>Vercel</strong>: hospedagem do site. Como qualquer hospedagem, mantém registros técnicos de
              acesso (como endereço IP) por segurança.
            </li>
            <li>
              <strong>Google Fonts</strong>: as fontes do site são carregadas pelo seu navegador a partir dos
              servidores do Google.
            </li>
          </ul>
          <p>
            Esses dados podem ser armazenados em servidores fora do Brasil. Essa transferência internacional
            (art. 33 da LGPD) é feita com as garantias contratuais oferecidas por esses provedores.
          </p>
        </Section>

        <Section title="6. Por quanto tempo guardamos">
          <p>
            Os dados da conta e do histórico ficam guardados enquanto a sua conta existir. Ao excluir a conta, a
            conta e os dados no Firestore são apagados, junto com a cópia guardada no navegador. Ao sair da conta,
            a cópia do navegador também é apagada (os dados continuam na sua conta), para que outra pessoa no
            mesmo aparelho não veja o seu histórico. Sem conta, os dados ficam no navegador até você limpá-los.
          </p>
        </Section>

        <Section title="7. Seus direitos">
          <p>Pela LGPD (art. 18), você pode pedir, a qualquer momento:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>confirmação de que tratamos seus dados;</li>
            <li>acesso aos seus dados;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>eliminação dos seus dados;</li>
            <li>portabilidade dos dados;</li>
            <li>revogação do consentimento.</li>
          </ul>
          <p>
            <strong>Como exercer:</strong> use o botão “Excluir minha conta e meus dados”, no menu da conta no site,
            que apaga tudo na hora; ou envie um e-mail para{' '}
            <a href={`mailto:${EMAIL}`} className="text-primary-ink underline">{EMAIL}</a>.
          </p>
        </Section>

        <Section title="8. Segurança">
          <ul className="list-disc pl-5 space-y-1">
            <li>As regras do banco de dados permitem que cada aluno leia e grave apenas os próprios dados.</li>
            <li>Toda a comunicação com o site é criptografada (HTTPS).</li>
          </ul>
        </Section>

        <Section title="9. Menores de idade">
          <p>
            O <Name /> é feito para estudantes universitários de Medicina e não é direcionado a menores de 18 anos.
          </p>
        </Section>

        <Section title="10. Alterações desta política">
          <p>
            Esta política pode ser atualizada. Quando isso acontecer, a data de atualização no topo desta página
            será alterada.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-line">
          <button onClick={onHome} className="btn btn-ghost">
            <Home size={16} />
            Voltar ao início
          </button>
        </div>
      </main>
    </div>
  );
};
