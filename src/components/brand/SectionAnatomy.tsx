import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BrandPattern } from './BrandPattern';
import { Target, MoveVertical, Infinity as InfinityIcon, Sparkles } from 'lucide-react';

export const SectionAnatomy: React.FC = () => {
  const [activePart, setActivePart] = useState<'foco' | 'astas' | 'infinito' | null>('astas');

  const anatomyDetails = {
    foco: {
      id: 'foco',
      title: '01. Concepto Superior',
      subtitle: 'Foco & Mente Serena',
      symbol: '○',
      icon: Target,
      highlight: 'Punto de atención plena sobre el eje corporal',
      description:
        'El círculo zen superior actúa como anclaje del eje vertical del cuerpo humano. Representa la coronilla, la quietud mental y el estado de alerta sereno previo a iniciar la respiración en cada asana.',
      details: [
        'Geometría circular pura sin esquinas ni tensiones.',
        'Alineación concéntrica con el eje medio de la letra central "t".',
        'Simboliza el chakra de la coronilla (Sahasrara) y la lucidez.',
      ],
    },
    astas: {
      id: 'astas',
      title: '02. Núcleo Gráfico',
      subtitle: 'Astas Moduladas (Nearo Rounded)',
      symbol: 'Mantra',
      icon: MoveVertical,
      highlight: 'Curvas elásticas que evocan elongación muscular',
      description:
        'Las astas del wordmark "Mantra" han sido moduladas mediante la familia Nearo Rounded. Cada terminal redondeado y transición de trazo evoca la elasticidad de los tejidos conectivos al entrar y salir suavemente de una postura.',
      details: [
        'Remates redondeados amables que eliminan aristas rígidas.',
        'Espaciado tracking calibrado para una respiración visual armónica.',
        'Ritmo continuo entre las curvas de la "M", "a", "n", "t", "r" y "a".',
      ],
    },
    infinito: {
      id: 'infinito',
      title: '03. Base en Movimiento',
      subtitle: 'Lazo Infinito (Lemniscata Zen)',
      symbol: '∞',
      icon: InfinityIcon,
      highlight: 'Postura meditativa y fluidez continua',
      description:
        'El lazo horizontal inferior emula las piernas cruzadas en Padmasana enraizadas a la tierra, al tiempo que representa el ciclo ininterrumpido de inhalación y exhalación (pranayama) que sostiene toda la práctica.',
      details: [
        'Curvatura continua simétrica con trazo uniforme de 4.5pt.',
        'Enraizamiento gráfico que da equilibrio físico y estabilidad.',
        'Módulo base para la trama gráfica continua de textiles y mats.',
      ],
    },
  };

  const activeContent = activePart ? anatomyDetails[activePart] : anatomyDetails.astas;
  const ActiveIcon = activeContent.icon;

  return (
    <section id="simbolo" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              03 · Anatomía Visual del Símbolo
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Estructura & Tríada Zen</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Concepto Superior · Núcleo Gráfico · Base en Movimiento
          </div>
        </div>

        {/* 3 Step Interactive Anatomy Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {/* Visual Interactive Dissection Canvas */}
          <div className="lg:col-span-7 bg-[#231C16] text-[#F5F2E6] rounded-2xl p-5 sm:p-8 md:p-12 flex flex-col justify-between items-center relative overflow-hidden shadow-md">
            <div className="w-full flex justify-between items-center text-xs opacity-60">
              <span className="uppercase tracking-widest font-mono text-[10px]">
                Inspección Anatómica
              </span>
              <span className="text-[11px]">Toca o pasa el cursor</span>
            </div>

            {/* Central Interactive Logo with pin markers */}
            <div className="py-8 sm:py-10 my-auto flex items-center justify-center relative w-full overflow-hidden">
              <BrandLogo
                variant="full"
                color="#F5F2E6"
                accentColor="#7398C1"
                size={340}
                showAnatomyPins={true}
                activeAnatomyPin={activePart}
                onHoverPin={(pin) => pin && setActivePart(pin)}
              />
            </div>

            {/* Selector Buttons underneath */}
            <div className="w-full grid grid-cols-3 gap-1.5 sm:gap-2 pt-5 sm:pt-6 border-t border-white/10">
              {(['foco', 'astas', 'infinito'] as const).map((partKey) => {
                const part = anatomyDetails[partKey];
                const isSelected = activePart === partKey;
                return (
                  <button
                    key={partKey}
                    onClick={() => setActivePart(partKey)}
                    className={`py-2 px-2 sm:px-3 rounded-lg text-xs transition-all text-center flex flex-col items-center gap-1 ${
                      isSelected
                        ? 'bg-[#7398C1] text-[#231C16] font-semibold shadow-xs'
                        : 'bg-white/5 hover:bg-white/10 text-white/75'
                    }`}
                  >
                    <span className="text-xs font-mono">{part.symbol}</span>
                    <span className="text-[10px] sm:text-[11px] truncate w-full">{part.subtitle.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Educational Concept Card */}
          <div className="lg:col-span-5 bg-white/70 border border-[#231C16]/10 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#231C16]/10 mb-6">
                <span className="text-xs font-mono text-[#676E56] uppercase tracking-wider">
                  {activeContent.title}
                </span>
                <span className="text-2xl font-display font-bold text-[#223189]">
                  {activeContent.symbol}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <ActiveIcon className="w-4 h-4 text-[#223189]" />
                <h3 className="font-display text-2xl text-[#231C16] font-bold">
                  {activeContent.subtitle}
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F2E6] border border-[#231C16]/8 mb-6">
                <p className="text-xs text-[#223189] font-medium leading-relaxed">
                  {activeContent.highlight}
                </p>
              </div>

              <p className="text-sm text-[#231C16]/80 leading-relaxed font-sans mb-6">
                {activeContent.description}
              </p>

              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#231C16]/50 block">
                  Fundamento Técnico & Semiótico:
                </span>
                {activeContent.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#231C16]/75">
                    <span className="text-[#223189] font-bold text-sm leading-none">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#231C16]/10 text-xs text-[#231C16]/50 flex justify-between items-center">
              <span>Mantra Brand Anatomy</span>
              <span className="font-mono text-[11px]">Proporción Áurea Zen</span>
            </div>
          </div>
        </div>

        {/* Trama Gráfica & Enraizamiento Strip (PDF Page 2) */}
        <div className="bg-[#676E56]/10 border border-[#676E56]/20 rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#676E56]/20">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#676E56] font-semibold block mb-1">
                Trama Gráfica & Enraizamiento
              </span>
              <h4 className="font-display text-xl text-[#231C16] font-bold">
                Patrón Continuo para Mats y Textiles
              </h4>
            </div>
            <p className="text-xs text-[#231C16]/70 max-w-md">
              Composición modular rítmica basada en la alternancia de <code className="font-mono text-[#223189]">○</code> y <code className="font-mono text-[#223189]">∞</code> concebida para grabado en esterillas, toallas y empaques.
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F2E6] border border-[#231C16]/10 p-6 shadow-inner">
            <BrandPattern color="#676E56" rows={3} cols={6} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 text-xs text-[#231C16]/60">
            <span>Ritmo: ○ ∞ ○ · ○ ∞ ○ · ○ ∞ ○</span>
            <span>Aplicación recomendada: Grabado láser o serigrafía al tono</span>
          </div>
        </div>
      </div>
    </section>
  );
};
