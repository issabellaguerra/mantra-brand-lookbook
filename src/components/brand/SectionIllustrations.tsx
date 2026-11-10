import React, { useState } from 'react';
import { BrandIllustration } from './BrandIllustrations';
import { SurfaceMode } from '../../types/brand';
import { Sparkles, Feather, Heart, Sun } from 'lucide-react';

export const SectionIllustrations: React.FC = () => {
  const [galleryBg, setGalleryBg] = useState<SurfaceMode>('marfil');

  const illustrations = [
    {
      id: 'quietud',
      title: 'Presencia',
      category: 'Quietud',
      subtitle: 'Yoga & Respiración',
      tagline: 'El centro inmóvil de la práctica',
      description:
        'Representa la calma mental y la alineación de la columna vertebral en Padmasana. Las manos en Gyan Mudra simbolizan la receptividad y la sabiduría interior.',
    },
    {
      id: 'equilibrio',
      title: 'Equilibrio',
      category: 'Control',
      subtitle: 'Movilidad Articular',
      tagline: 'Fuerza serena y balance sobre un pie',
      description:
        'Inspirada en Natarajasana (postura del bailarín). Muestra la conexión entre la apertura torácica anterior y la fuerza de soporte en el pie de enraizamiento.',
    },
    {
      id: 'extension',
      title: 'Extensión',
      category: 'Amplitud',
      subtitle: 'Flexibilidad Consciente',
      tagline: 'Apertura sin forzar el rango articular',
      description:
        'Curva dorsal armónica que simboliza la expansión torácica y la confianza corporal. Enseña a respirar en la máxima elongación.',
    },
    {
      id: 'gatito',
      title: 'Desperezo Matutino',
      category: 'Estiramiento Instintivo',
      subtitle: 'Soltar Tensión Acumulada',
      tagline: 'El estiramiento natural de los felinos',
      description:
        'Un guiño cálido y empático al instinto biológico de desperezarse. Recuerda que la movilidad debe ser tan natural y placentera como el estiramiento de un gato.',
    },
    {
      id: 'comunidad',
      title: 'Comunidad Online',
      category: 'Calidez de Practicar en Casa',
      subtitle: 'Tu sala convertida en estudio',
      tagline: 'La esterilla como templo personal',
      description:
        'Postura de perro boca abajo en el suelo de la sala. Refleja la intimidad y accesibilidad de las sesiones en vivo a través de Zoom y plataformas digitales.',
    },
  ];

  const bgStyles = {
    marfil: {
      card: 'bg-[#F5F2E6] border-[#231C16]/10 text-[#231C16]',
      lineColor: '#223189',
      subText: 'text-[#231C16]/70',
      tagClass: 'text-[#223189]',
    },
    indigo: {
      card: 'bg-[#223189] border-transparent text-[#F5F2E6]',
      lineColor: '#F5F2E6',
      subText: 'text-[#F5F2E6]/70',
      tagClass: 'text-[#7398C1]',
    },
    cacao: {
      card: 'bg-[#231C16] border-transparent text-[#F5F2E6]',
      lineColor: '#7398C1',
      subText: 'text-[#F5F2E6]/70',
      tagClass: 'text-[#7398C1]',
    },
    oliva: {
      card: 'bg-[#676E56] border-transparent text-[#F5F2E6]',
      lineColor: '#F5F2E6',
      subText: 'text-[#F5F2E6]/70',
      tagClass: 'text-[#F5F2E6]',
    },
    cielo: {
      card: 'bg-[#7398C1] border-transparent text-[#231C16]',
      lineColor: '#223189',
      subText: 'text-[#231C16]/75',
      tagClass: 'text-[#223189]',
    },
  };

  const currentStyle = bgStyles[galleryBg];

  return (
    <section id="ilustracion" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              06 · Universo Ilustrado
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Cuerpo, Calma & Movimiento</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Trazo Lineal Directo en Azul Índigo · Arte Orgánico Continuo
          </div>
        </div>

        {/* Introduction Banner & Background Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-12 pb-6 border-b border-[#231C16]/10">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#231C16] mb-2">
              Universo Gráfico de Posturas y Calma
            </h3>
            <p className="text-xs sm:text-sm text-[#231C16]/75 max-w-2xl leading-relaxed">
              Ilustraciones dibujadas con trazo suelto, sensible y de espesor constante. Despojan a la figura de artificios anatómicos hiperrealistas para quedarse con la emoción pura de la postura.
            </p>
          </div>

          {/* Canvas Background Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white/70 border border-[#231C16]/10 rounded-xl shrink-0 self-start md:self-auto overflow-x-auto">
            <span className="text-[11px] font-medium text-[#231C16]/60 px-1 sm:px-2">Fondo:</span>
            <button
              onClick={() => setGalleryBg('marfil')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                galleryBg === 'marfil'
                  ? 'bg-[#F5F2E6] text-[#231C16] shadow-xs border border-[#231C16]/15'
                  : 'text-[#231C16]/70 hover:text-[#231C16]'
              }`}
            >
              Marfil
            </button>
            <button
              onClick={() => setGalleryBg('indigo')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                galleryBg === 'indigo'
                  ? 'bg-[#223189] text-white shadow-xs'
                  : 'text-[#231C16]/70 hover:text-[#231C16]'
              }`}
            >
              Índigo
            </button>
            <button
              onClick={() => setGalleryBg('cacao')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                galleryBg === 'cacao'
                  ? 'bg-[#231C16] text-white shadow-xs'
                  : 'text-[#231C16]/70 hover:text-[#231C16]'
              }`}
            >
              Cacao
            </button>
          </div>
        </div>

        {/* 5 Illustrated Pose Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {illustrations.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${currentStyle.card}`}
            >
              <div>
                {/* Category kicker */}
                <div className="flex items-center justify-between pb-3 border-b border-current/10 mb-6 text-xs">
                  <span className={`uppercase tracking-wider font-semibold ${currentStyle.tagClass}`}>
                    {item.category}
                  </span>
                  <span className="opacity-50 text-[11px] font-mono">06 · {item.id}</span>
                </div>

                {/* SVG Illustration Container */}
                <div className="py-6 flex items-center justify-center min-h-[220px]">
                  <BrandIllustration
                    name={item.id as any}
                    color={currentStyle.lineColor}
                    size={190}
                  />
                </div>

                {/* Title & Subtitle */}
                <h4 className="font-display text-2xl font-bold mb-1">
                  {item.title}
                </h4>
                <p className={`text-xs font-medium mb-3 ${currentStyle.tagClass}`}>
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${currentStyle.subText}`}>
                  {item.description}
                </p>
              </div>

              {/* Tagline footer */}
              <div className="pt-4 mt-6 border-t border-current/10 flex items-center gap-2 text-[11px] opacity-70">
                <Feather className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.tagline}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Philosophy of Illustration (Trazo directo en Azul Índigo) */}
          <div className="rounded-2xl p-8 bg-[#676E56]/15 border border-[#676E56]/25 flex flex-col justify-between text-[#231C16]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#676E56]/20 mb-6 text-xs">
                <span className="uppercase tracking-wider font-semibold text-[#676E56]">
                  Acento Ligero · Respiración
                </span>
                <span className="text-[#676E56] font-mono text-[11px]">Guía de Estilo</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-[#231C16] mb-3">
                Trazo Directo en Índigo
              </h4>
              <p className="text-xs text-[#231C16]/80 leading-relaxed mb-4">
                El trazo manual no busca la perfección geométrica de una máquina, sino la autenticidad del gesto vivo.
              </p>

              <div className="space-y-2 text-xs text-[#231C16]/75">
                <div className="flex items-start gap-2">
                  <span className="text-[#676E56] font-bold">•</span>
                  <span>Grosor de trazo uniforme calibrado a 3.2px</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#676E56] font-bold">•</span>
                  <span>Terminaciones redondeadas (stroke-linecap: round)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#676E56] font-bold">•</span>
                  <span>Uso exclusivo en azul Índigo (#223189) o Marfil (#F5F2E6)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#676E56]/20 text-[11px] text-[#231C16]/60">
              Mantra Visual Universe · 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
