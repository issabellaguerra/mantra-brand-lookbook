import React from 'react';
import { BrandIllustration } from './BrandIllustrations';
import { BrandLogo } from './BrandLogo';
import { Sparkles, Compass } from 'lucide-react';

export const SectionEssence: React.FC = () => {
  return (
    <section id="esencia" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Subtitle & Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              01 · Esencia de Marca
            </span>
            <span className="text-xs text-[#231C16]/40">·</span>
            <span className="text-xs text-[#231C16]/60">Presencia Consciente</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Manual de Identidad Visual · Mantra 2026
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
          {/* Left: Deep Indigo Card with White/Sky typography */}
          <div className="lg:col-span-8 bg-[#223189] text-[#F5F2E6] rounded-2xl p-6 sm:p-12 md:p-16 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Subtle light aura */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#7398C1]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#7398C1] font-semibold mb-6 sm:mb-8">
                <span>Manifiesto Visual</span>
                <span>·</span>
                <span>Voz & Propósito</span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-normal leading-snug sm:leading-[1.25] text-balance mb-6 sm:mb-8 text-[#F5F2E6]">
                “Abrir espacio en el cuerpo, soltar rigidez y habitar la calma en cada movimiento.”
              </blockquote>

              <p className="text-xs sm:text-base text-[#F5F2E6]/85 max-w-xl leading-relaxed font-sans font-light">
                Mantra no es solo una práctica física; es un refugio para reencontrar la respiración consciente. Cada vector, forma y tono de color nace para disolver la prisa y devolver la armonía corporal en cualquier espacio.
              </p>
            </div>

            <div className="relative z-10 pt-10 mt-8 border-t border-[#F5F2E6]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm tracking-wider uppercase text-[#7398C1] font-medium">
              <span>Flexibilidad</span>
              <span className="opacity-40">·</span>
              <span>Movilidad</span>
              <span className="opacity-40">·</span>
              <span>Yoga</span>
              <span className="opacity-40">·</span>
              <span className="text-[#F5F2E6]">Online & Presencial</span>
            </div>
          </div>

          {/* Right: Marfil Card with Official Quietude Meditation Illustration */}
          <div className="lg:col-span-4 bg-[#F5F2E6] border border-[#231C16]/15 rounded-2xl p-7 sm:p-8 flex flex-col justify-between items-center text-center shadow-sm">
            <div className="w-full flex justify-between items-center text-xs pb-4 border-b border-[#231C16]/10">
              <span className="uppercase tracking-wider font-semibold text-[#223189]">
                Presencia Consciente
              </span>
              <span className="text-[#231C16]/50 font-light text-xs">Quietud</span>
            </div>

            <div className="py-8 my-auto flex flex-col items-center justify-center">
              <BrandIllustration name="quietud" color="#223189" size={215} />
            </div>

            <div className="w-full pt-4 border-t border-[#231C16]/10 text-left">
              <h4 className="font-display text-xl text-[#231C16] font-bold mb-1.5">
                El Cuerpo como Eje
              </h4>
              <p className="text-xs text-[#231C16]/80 leading-relaxed font-sans">
                Trazos lineales de contorno continuo que expresan arraigo en la tierra y apertura en la respiración.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Brand Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-xl border border-[#231C16]/10 bg-white/50 backdrop-blur-xs">
            <span className="text-[11px] font-mono text-[#676E56] uppercase tracking-wider block mb-2">
              Pilar 01
            </span>
            <h4 className="font-display text-lg text-[#231C16] font-semibold mb-1">
              Flexibilidad Consciente
            </h4>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Elongación progresiva respetando los límites orgánicos del cuerpo.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#231C16]/10 bg-white/50 backdrop-blur-xs">
            <span className="text-[11px] font-mono text-[#676E56] uppercase tracking-wider block mb-2">
              Pilar 02
            </span>
            <h4 className="font-display text-lg text-[#231C16] font-semibold mb-1">
              Movilidad Articular
            </h4>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Recuperar rangos de movimiento fluidos para el bienestar diario.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#231C16]/10 bg-white/50 backdrop-blur-xs">
            <span className="text-[11px] font-mono text-[#676E56] uppercase tracking-wider block mb-2">
              Pilar 03
            </span>
            <h4 className="font-display text-lg text-[#231C16] font-semibold mb-1">
              Yoga Holístico
            </h4>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Unión de respiración, quietud mental y posturas corporales sanadoras.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#231C16]/10 bg-white/50 backdrop-blur-xs">
            <span className="text-[11px] font-mono text-[#676E56] uppercase tracking-wider block mb-2">
              Pilar 04
            </span>
            <h4 className="font-display text-lg text-[#231C16] font-semibold mb-1">
              Online & Presencial
            </h4>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Desde la intimidad de tu sala de estar hasta la atmósfera del estudio.
            </p>
          </div>
        </div>

        {/* Editorial Photographic Diptych */}
        <div className="mt-14 pt-10 border-t border-[#231C16]/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#223189] font-semibold block">
                Atmósfera & Materia
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#231C16]">
                El Cuerpo como Territorio de Calma
              </h4>
            </div>
            <span className="text-xs text-[#231C16]/50">
              Fotografía Oficial de Campaña · 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Left Photo: Balasana */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden bg-[#231C16] relative min-h-[300px] sm:min-h-[360px] group border border-[#231C16]/10 shadow-xs">
              <img
                src="/assets/aistudio/f0276d69c888ea190fbf51f614c2751d_55af7769.jpg"
                alt="Balasana postura del niño"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#7398C1] block mb-1">
                  Pausa Restaurativa · Balasana
                </span>
                <p className="font-display text-xl sm:text-2xl font-normal leading-snug text-[#F5F2E6]">
                  “Ceder el peso a la tierra para reconstruir el espacio interno.”
                </p>
              </div>
            </div>

            {/* Right Photo: Tactile Twist */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden bg-[#231C16] relative min-h-[300px] sm:min-h-[360px] group border border-[#231C16]/10 shadow-xs">
              <img
                src="/assets/aistudio/d248055fa6edc5267d0a372a73fbc432_797cff6a.jpg"
                alt="Torsión articular y tacto consciente"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#7398C1] block mb-1">
                  Sensación Táctil & Movilidad
                </span>
                <p className="text-xs text-[#F5F2E6]/90 leading-relaxed font-sans font-light">
                  Luz solar rasante sobre granito. La respiración consciente en el costado como guía de la elongación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
