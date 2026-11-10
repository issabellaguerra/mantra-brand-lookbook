import React, { useState } from 'react';
import { Type, Sparkles } from 'lucide-react';
import { LOGO_PATHS } from './BrandLogo';

export const SectionTypography: React.FC = () => {
  const [customText, setCustomText] = useState('Habitar la calma en cada movimiento');
  const [activeFont, setActiveFont] = useState<'philosopher' | 'dmsans'>('philosopher');
  const [fontSize, setFontSize] = useState<number>(36);

  return (
    <section id="tipografia" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              05 · Expresión Tipográfica
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Voz, Ritmo & Legibilidad</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Nearo Rounded (Logo) · Philosopher (Titulares) · DM Sans (Lectura)
          </div>
        </div>

        {/* 3 Typography Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Logo Font - Nearo Rounded */}
          <div className="bg-white/80 border border-[#231C16]/10 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#231C16]/10 mb-6">
                <span className="text-xs font-mono text-[#676E56] uppercase tracking-wider">
                  Logotipo & Sellos
                </span>
                <span className="text-xs text-[#231C16]/50">Identidad Central</span>
              </div>

              <div className="h-28 flex flex-col justify-center">
                {/* Authentic Nearo Rounded Aa Vector Specimen */}
                <svg
                  viewBox="92 88 138 102"
                  className="h-20 w-auto"
                  fill="#223189"
                  role="img"
                  aria-label="Espécimen Tipográfico Aa en Nearo Rounded"
                >
                  {/* Uppercase A: High contrast Nearo Rounded DNA (hairline left, bold rounded pill right) */}
                  <path d="M 133 94 C 128.5 94, 126 97, 124.5 102 L 102.5 178 C 101.5 181.5, 103 185, 106.8 185 C 110.5 185, 112.5 182, 113.8 178 L 121 154 L 146 154 L 152.5 174 C 154.5 180, 159 185, 165 185 C 171.5 185, 174.5 179.5, 172 173 L 143.5 101 C 141.5 96.5, 137.5 94, 133 94 Z M 124.5 144 L 133.5 114 L 142.5 144 Z" />
                  {/* Lowercase a: Exact vector path from the master Mantra logo */}
                  <path d={LOGO_PATHS.a1} />
                </svg>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231C16] mb-2">
                Nearo Rounded
              </h3>
              <p className="text-xs text-[#223189] font-medium mb-4">
                Curvas elásticas con terminaciones suaves
              </p>
              <p className="text-xs text-[#231C16]/70 leading-relaxed">
                Tipografía oficial del logotipo 'Mantra'. Destaca por su alto contraste entre trazos capilares y astas gruesas redondeadas, acompañando la elongación muscular sin ángulos rígidos.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#231C16]/10 text-[11px] text-[#231C16]/50 flex justify-between">
              <span>Uso: Logotipos e Isotipos</span>
              <span>Digitype Studio · Alta Modulación</span>
            </div>
          </div>

          {/* Card 2: Display Font - Philosopher */}
          <div className="bg-white/80 border border-[#231C16]/10 rounded-2xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#231C16]/10 mb-6">
                <span className="text-xs font-mono text-[#676E56] uppercase tracking-wider">
                  Titulares & Editorial
                </span>
                <span className="text-xs text-[#231C16]/50">Curva Humanista</span>
              </div>

              <div className="h-28 flex items-center">
                <span className="font-display text-6xl text-[#223189]">Aa</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231C16] mb-2">
                Philosopher
              </h3>
              <p className="text-xs text-[#223189] font-medium mb-4">
                Curva humanista y orgánica
              </p>
              <p className="text-xs text-[#231C16]/70 leading-relaxed">
                Dota a los mensajes principales de una cadencia sosegada, refinada y consciente. Ideal para encabezados, portadas de guías y citas del manifiesto.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#231C16]/10 text-[11px] text-[#231C16]/50 flex justify-between">
              <span>Uso: H1, H2, Manifiestos</span>
              <span>Pesos: Regular & Bold</span>
            </div>
          </div>

          {/* Card 3: Body Font - DM Sans */}
          <div className="bg-white/80 border border-[#231C16]/10 rounded-2xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#231C16]/10 mb-6">
                <span className="text-xs font-mono text-[#676E56] uppercase tracking-wider">
                  Lectura, Web & Horarios
                </span>
                <span className="text-xs text-[#231C16]/50">Geometría Limpia</span>
              </div>

              <div className="h-28 flex items-center">
                <span className="font-sans text-6xl text-[#223189] font-medium">Aa</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#231C16] mb-2">
                DM Sans
              </h3>
              <p className="text-xs text-[#223189] font-medium mb-4">
                Claridad limpia en horarios, web y sesiones online
              </p>
              <p className="text-xs text-[#231C16]/70 leading-relaxed">
                Diseñada para una legibilidad sin esfuerzo en pantallas pequeñas, tablas de horarios de clases y comunicación funcional con alumnos.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#231C16]/10 text-[11px] text-[#231C16]/50 flex justify-between">
              <span>Uso: Párrafos, UI, Horarios</span>
              <span>Tabular nums & Glifos</span>
            </div>
          </div>
        </div>

        {/* Ritmo Visual Strip (From PDF Page 3) */}
        <div className="bg-[#223189] text-[#F5F2E6] rounded-2xl p-8 sm:p-12 mb-16 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/15">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7398C1] font-semibold block mb-1">
                Ritmo Visual de Marca
              </span>
              <h3 className="font-display text-2xl font-bold text-[#F5F2E6]">
                Cadencia Respiratoria en Tres Pasos
              </h3>
            </div>
            <p className="text-xs text-[#F5F2E6]/75 max-w-md">
              La jerarquía de titulares de Mantra debe seguir este compás rítmico de progresión corporal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-[#7398C1] mb-2">01 · Inhalación</span>
              <div className="font-display text-3xl font-normal text-[#F5F2E6] mb-2">
                Respirar profundo
              </div>
              <p className="text-xs text-[#F5F2E6]/70 leading-relaxed">
                Punto de inicio y toma de conciencia del estado presente.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-[#7398C1] mb-2">02 · Transición</span>
              <div className="font-display text-3xl font-normal text-[#F5F2E6] mb-2">
                Ganar movilidad
              </div>
              <p className="text-xs text-[#F5F2E6]/70 leading-relaxed">
                Apertura y desbloqueo progresivo de las articulaciones.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-[#7398C1] mb-2">03 · Enraizamiento</span>
              <div className="font-display text-3xl font-normal text-[#7398C1] mb-2">
                Habitar la calma
              </div>
              <p className="text-xs text-[#F5F2E6]/70 leading-relaxed">
                Permanencia serena en la postura sin tensión residual.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Type Specimen Playground */}
        <div className="bg-white/70 border border-[#231C16]/10 rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#231C16]/10 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase text-[#223189] tracking-wider block mb-1">
                Laboratorio Tipográfico Interactivo
              </span>
              <h4 className="font-display text-xl text-[#231C16] font-bold">
                Espécimen de Prueba en Tiempo Real
              </h4>
            </div>

            {/* Font selector buttons */}
            <div className="flex items-center gap-2 p-1 bg-[#F5F2E6] rounded-xl border border-[#231C16]/10">
              <button
                onClick={() => setActiveFont('philosopher')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFont === 'philosopher'
                    ? 'bg-[#223189] text-white shadow-xs'
                    : 'text-[#231C16]/70 hover:text-[#231C16]'
                }`}
              >
                Philosopher
              </button>
              <button
                onClick={() => setActiveFont('dmsans')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFont === 'dmsans'
                    ? 'bg-[#223189] text-white shadow-xs'
                    : 'text-[#231C16]/70 hover:text-[#231C16]'
                }`}
              >
                DM Sans
              </button>
            </div>
          </div>

          {/* Controls: Input & Slider */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
            <div className="md:col-span-8">
              <label className="text-xs font-medium text-[#231C16]/60 block mb-1.5">
                Texto de prueba personalizado:
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#231C16]/15 bg-white text-sm text-[#231C16] focus:outline-none focus:ring-2 focus:ring-[#223189]/20 focus:border-[#223189]"
                placeholder="Escribe aquí para probar..."
              />
            </div>

            <div className="md:col-span-4">
              <div className="flex justify-between text-xs text-[#231C16]/60 mb-1.5">
                <span>Escala tipográfica</span>
                <span className="font-mono font-semibold text-[#223189]">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="20"
                max="64"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-[#223189] cursor-pointer"
              />
            </div>
          </div>

          {/* Rendered Specimen Box */}
          <div className="p-8 rounded-xl bg-[#F5F2E6] border border-[#231C16]/10 min-h-[160px] flex items-center justify-center text-center overflow-x-auto">
            <p
              style={{
                fontFamily:
                  activeFont === 'philosopher'
                    ? "'Philosopher', serif"
                    : "'DM Sans', sans-serif",
                fontSize: `${fontSize}px`,
                lineHeight: 1.25,
              }}
              className="text-[#231C16] transition-all"
            >
              {customText || 'Escribe una frase para previsualizar...'}
            </p>
          </div>

          {/* Glyph Set & Tabular Numerals */}
          <div className="mt-8 pt-6 border-t border-[#231C16]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#231C16]/70">
            <div>
              <span className="font-semibold text-[#223189] block mb-1">
                Juego de Caracteres & Símbolos:
              </span>
              <p className="font-mono text-sm tracking-widest text-[#231C16]/80">
                Aa Bb Cc Dd Ee Ff Gg · ¡!¿?&∞
              </p>
            </div>
            <div>
              <span className="font-semibold text-[#223189] block mb-1">
                Numerales Tabulares para Horarios:
              </span>
              <p className="font-mono text-sm tracking-widest text-[#231C16]/80">
                0 1 2 3 4 5 6 7 8 9 · 08:30 · 19:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
