import React from 'react';

/** Marca `**trecho**` em negrito. */
function inline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

/**
 * Texto de explicação com formatação leve: parágrafos separados por linha em branco,
 * linhas iniciadas por "• " viram tópicos e `**trecho**` fica em negrito.
 */
export const RichText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className={`space-y-3 ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split('\n');
        const nodes: React.ReactNode[] = [];
        let bullets: string[] = [];
        let plain: string[] = [];
        const flushBullets = () => {
          if (!bullets.length) return;
          nodes.push(
            <ul key={`u${nodes.length}`} className="space-y-1.5 pl-1">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-primary select-none">•</span>
                  <span>{inline(b)}</span>
                </li>
              ))}
            </ul>,
          );
          bullets = [];
        };
        const flushPlain = () => {
          if (!plain.length) return;
          nodes.push(
            <p key={`p${nodes.length}`} className="whitespace-pre-line">
              {inline(plain.join('\n'))}
            </p>,
          );
          plain = [];
        };
        for (const line of lines) {
          if (line.startsWith('• ')) {
            flushPlain();
            bullets.push(line.slice(2));
          } else {
            flushBullets();
            plain.push(line);
          }
        }
        flushPlain();
        flushBullets();
        return nodes.length === 1 ? nodes[0] : <div key={bi} className="space-y-1.5">{nodes}</div>;
      })}
    </div>
  );
};
