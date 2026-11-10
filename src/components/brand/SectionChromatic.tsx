import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { BrandColor } from '../../types/brand';

interface SectionChromaticProps {
  onShowToast: (msg: string) => void;
}

export const SectionChromatic: React.FC<SectionChromaticProps> = ({ onShowToast }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const colors: BrandColor[] = [
    {
      id: 'marfil',
      name: 'Marfil',
      role: 'Luz / Lienzo',
      category: 'Luz',
      percentage: 34,
      hex: '#F5F2E6',
      rgb: '245, 242, 230',
      cmyk: '2% 3% 8% 0%',
      contrastText: 'Oscuro (#231C16)',
      description:
        'Lienzo base primario que acoge todos los contenidos. Aporta calidez orgánica sin el deslumbramiento frío del blanco óptico tradicional.',
    },
    {
      id: 'indigo',
      name: 'Índigo',
      role: 'Guía / Enfoque',
      category: 'Enfoque',
      percentage: 24,
      hex: '#223189',
      rgb: '34, 49, 137',
      cmyk: '95% 85% 10% 2%',
      contrastText: 'Claro (#F5F2E6)',
      description:
        'El corazón cromático de Mantra. Evoca profundidad, concentración meditativa, nobleza y rigor profesional en sesiones y cabeceras.',
    },
    {
      id: 'oliva',
      name: 'Oliva',
      role: 'Orgánico / Tierra',
      category: 'Tierra',
      percentage: 16,
      hex: '#676E56',
      rgb: '103, 110, 86',
      cmyk: '55% 40% 65% 20%',
      contrastText: 'Claro (#F5F2E6)',
      description:
        'Conexión con el enraizamiento y la naturaleza viva. Ideal para etiquetas secundarias, packaging textil y acentos de calma botánica.',
    },
    {
      id: 'cacao',
      name: 'Cacao',
      role: 'Texto / Raíz',
      category: 'Raíz',
      percentage: 14,
      hex: '#231C16',
      rgb: '35, 28, 22',
      cmyk: '65% 65% 70% 75%',
      contrastText: 'Claro (#F5F2E6)',
      description:
        'Tono de raíz profundo para tipografía de lectura, párrafos y versiones nocturnas de alto contraste sin recurrir al negro puro estéril.',
    },
    {
      id: 'cielo',
      name: 'Cielo',
      role: 'Brillo / Aire',
      category: 'Aire',
      percentage: 12,
      hex: '#7398C1',
      rgb: '115, 152, 193',
      cmyk: '45% 25% 5% 0%',
      contrastText: 'Oscuro (#231C16)',
      description:
        'Elemento de respiración y ligereza. Se aplica en acentos suaves, detalles del símbolo sobre fondos oscuros e insignias de bienestar.',
    },
  ];

  const handleCopy = (code: string, colorName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onShowToast(`Código ${code} de ${colorName} copiado al portapapeles`);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="paleta" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              04 · Arquitectura Cromática
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Jerarquía & Proporción Visual</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Fórmula Armónica: 34% Lienzo · 24% Guía · 16% Orgánico · 14% Texto · 12% Brillo
          </div>
        </div>

        {/* Proportional Balance Bar (From PDF Page 2) */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-[#231C16] uppercase tracking-wider">
              Distribución Proporcional de Marca
            </span>
            <span className="text-[#231C16]/60">100% Equilibrio Cromático</span>
          </div>

          {/* Color strip with percentage labels */}
          <div className="h-14 w-full rounded-2xl overflow-hidden flex shadow-sm border border-[#231C16]/10">
            <div
              style={{ width: '34%', backgroundColor: '#F5F2E6' }}
              className="h-full flex items-center justify-center text-[11px] font-semibold text-[#231C16] border-r border-[#231C16]/10"
              title="34% Lienzo (Marfil)"
            >
              <span className="hidden sm:inline">34% Lienzo</span>
              <span className="sm:hidden">34%</span>
            </div>
            <div
              style={{ width: '24%', backgroundColor: '#223189' }}
              className="h-full flex items-center justify-center text-[11px] font-semibold text-[#F5F2E6]"
              title="24% Guía (Índigo)"
            >
              <span className="hidden sm:inline">24% Guía</span>
              <span className="sm:hidden">24%</span>
            </div>
            <div
              style={{ width: '16%', backgroundColor: '#676E56' }}
              className="h-full flex items-center justify-center text-[11px] font-semibold text-[#F5F2E6]"
              title="16% Orgánico (Oliva)"
            >
              <span className="hidden sm:inline">16% Orgánico</span>
              <span className="sm:hidden">16%</span>
            </div>
            <div
              style={{ width: '14%', backgroundColor: '#231C16' }}
              className="h-full flex items-center justify-center text-[11px] font-semibold text-[#F5F2E6]"
              title="14% Texto (Cacao)"
            >
              <span className="hidden sm:inline">14% Texto</span>
              <span className="sm:hidden">14%</span>
            </div>
            <div
              style={{ width: '12%', backgroundColor: '#7398C1' }}
              className="h-full flex items-center justify-center text-[11px] font-semibold text-[#231C16]"
              title="12% Brillo (Cielo)"
            >
              <span className="hidden sm:inline">12% Brillo</span>
              <span className="sm:hidden">12%</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-[#231C16]/50 mt-2 px-1">
            <span>Marfil (#F5F2E6)</span>
            <span>Índigo (#223189)</span>
            <span>Oliva (#676E56)</span>
            <span>Cacao (#231C16)</span>
            <span>Cielo (#7398C1)</span>
          </div>
        </div>

        {/* 5 Detailed Swatch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {colors.map((c) => {
            const isCopied = copiedCode === c.hex;
            const isDark = c.id === 'indigo' || c.id === 'cacao' || c.id === 'oliva';

            return (
              <div
                key={c.id}
                className="bg-white/80 border border-[#231C16]/10 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                {/* Visual Swatch Block */}
                <div
                  className="h-36 p-4 flex flex-col justify-between relative cursor-pointer group/swatch transition-transform"
                  style={{ backgroundColor: c.hex }}
                  onClick={() => handleCopy(c.hex, c.name)}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded ${
                        isDark ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                      }`}
                    >
                      {c.category}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`}
                    >
                      {c.percentage}%
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <h4
                        className={`font-display text-xl font-bold ${
                          isDark ? 'text-white' : 'text-[#231C16]'
                        }`}
                      >
                        {c.name}
                      </h4>
                      <p
                        className={`text-[11px] ${
                          isDark ? 'text-white/70' : 'text-[#231C16]/70'
                        }`}
                      >
                        {c.role}
                      </p>
                    </div>

                    <button
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDark
                          ? 'bg-white/20 hover:bg-white/30 text-white'
                          : 'bg-black/10 hover:bg-black/20 text-black'
                      }`}
                      title="Copiar código HEX"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#231C16]/8">
                      <span className="text-[#231C16]/60">HEX</span>
                      <button
                        onClick={() => handleCopy(c.hex, c.name)}
                        className="font-mono font-semibold text-[#223189] hover:underline flex items-center gap-1"
                      >
                        <span>{c.hex}</span>
                        <Copy className="w-2.5 h-2.5 opacity-60" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#231C16]/8">
                      <span className="text-[#231C16]/60">RGB</span>
                      <button
                        onClick={() => handleCopy(c.rgb, c.name)}
                        className="font-mono text-[#231C16]/80 text-[11px] hover:text-[#223189]"
                      >
                        {c.rgb}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#231C16]/8">
                      <span className="text-[#231C16]/60">CMYK</span>
                      <span className="font-mono text-[#231C16]/80 text-[11px]">
                        {c.cmyk}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#231C16]/60">Contraste</span>
                      <span className="text-[11px] text-[#223189] font-medium">
                        WCAG AA ✓
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#231C16]/70 leading-relaxed pt-2 border-t border-[#231C16]/8">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
