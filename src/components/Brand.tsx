import React from 'react';
import { Zap } from 'lucide-react';

interface BrandProps {
  onClick?: () => void;
  size?: 'sm' | 'md';
}

/** Marca DEsimulados: raio branco sobre o quadrado verde + nome (protegido do tradutor). */
export const Brand: React.FC<BrandProps> = ({ onClick, size = 'md' }) => {
  const box = size === 'sm' ? 'w-7 h-7 rounded-[9px]' : 'w-8 h-8 rounded-[10px]';
  const content = (
    <>
      <span className={`${box} bg-primary text-white flex items-center justify-center shrink-0`}>
        <Zap size={size === 'sm' ? 14 : 16} strokeWidth={2.4} fill="currentColor" />
      </span>
      <span
        className={`font-heading font-extrabold text-ink tracking-tight notranslate ${size === 'sm' ? 'text-base' : 'text-lg'}`}
        translate="no"
      >
        DEsimulados
      </span>
    </>
  );
  if (!onClick) return <div className="flex items-center gap-2.5">{content}</div>;
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-2.5 rounded-lg" aria-label="DEsimulados — início">
      {content}
    </button>
  );
};
