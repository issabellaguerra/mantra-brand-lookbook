import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BrandIllustration } from './BrandIllustrations';
import { BrandPattern } from './BrandPattern';
import { Video, Smartphone, BookOpen, CreditCard, Layers, Users, Heart, Share2, Volume2 } from 'lucide-react';

export const SectionLiveUniverse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'streaming' | 'reel' | 'guia' | 'pase' | 'mat'>('streaming');

  return (
    <section id="universo" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              08 · Universo en Vivo
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Online & Presencial</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Streaming · Redes Sociales · Guía Digital · Pase Estudio · Mats
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white/70 border border-[#231C16]/10 rounded-2xl mb-8 sm:mb-10 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => setActiveTab('streaming')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'streaming'
                ? 'bg-[#223189] text-white shadow-xs'
                : 'text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Streaming (Zoom)</span>
          </button>

          <button
            onClick={() => setActiveTab('reel')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'reel'
                ? 'bg-[#223189] text-white shadow-xs'
                : 'text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Instagram Reel</span>
          </button>

          <button
            onClick={() => setActiveTab('guia')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'guia'
                ? 'bg-[#223189] text-white shadow-xs'
                : 'text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guía Digital (15 Min)</span>
          </button>

          <button
            onClick={() => setActiveTab('pase')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'pase'
                ? 'bg-[#223189] text-white shadow-xs'
                : 'text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pase Estudio Mat</span>
          </button>

          <button
            onClick={() => setActiveTab('mat')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'mat'
                ? 'bg-[#223189] text-white shadow-xs'
                : 'text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Mat & Textil Grabado</span>
          </button>
        </div>

        {/* Live Simulator Viewport */}
        <div className="bg-white/60 border border-[#231C16]/10 rounded-3xl p-4 sm:p-8 md:p-12 shadow-sm min-h-[440px] sm:min-h-[520px] flex items-center justify-center">
          {/* 01. STREAMING ZOOM */}
          {activeTab === 'streaming' && (
            <div className="w-full max-w-3xl rounded-2xl bg-[#231C16] border border-stone-800 text-white shadow-2xl overflow-hidden flex flex-col">
              {/* Zoom Top Bar */}
              <div className="px-4 sm:px-5 py-3 bg-[#1A1410] border-b border-white/10 flex items-center justify-between text-xs text-white/70 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block shrink-0" />
                  <span className="ml-2 font-medium text-white/90 truncate">
                    Mantra Studio Live
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#7398C1] shrink-0">
                  <Users className="w-3.5 h-3.5" />
                  <span>38 conectados</span>
                </div>
              </div>

              {/* Video Screen Body with Authentic Campaign Photography */}
              <div className="relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden bg-black">
                {/* Background Video Stream Image */}
                <img
                  src="/assets/aistudio/9af3149bfcccd796159f25bbb5097d4b_97042f37.jpg"
                  alt="Transmisión en vivo Adho Mukha Svanasana"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="w-full flex justify-between items-center z-10 p-4 sm:p-6 text-xs gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase border border-white/10">
                      EN VIVO · ZOOM
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#223189]/90 text-white text-[9px] sm:text-[10px] font-mono hidden xs:inline">
                      INSTRUCTORA
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white/90">REC 00:42:15</span>
                  </div>
                </div>

                {/* Center Posture Alignment HUD */}
                <div className="z-10 p-4 sm:p-6 my-auto text-left max-w-sm bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 mx-3 sm:ml-6 sm:mx-0">
                  <span className="text-[10px] font-mono text-[#7398C1] uppercase tracking-wider block mb-1">
                    Asana Guiada · Minuto 42
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#F5F2E6]">
                    Adho Mukha Svanasana
                  </h4>
                  <p className="text-[11px] text-white/80 mt-1 leading-relaxed">
                    “Arraiga las yemas de los dedos, suelta la nuca y proyecta los isquiones hacia el cielo.”
                  </p>
                </div>

                {/* Bottom Speaker Nameplate */}
                <div className="w-full flex items-center justify-between z-10 p-4 sm:p-6 pt-3 sm:pt-4 border-t border-white/15 text-xs text-white/80 bg-black/60 backdrop-blur-md gap-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-3.5 h-3.5 text-[#7398C1] shrink-0" />
                    <span className="font-semibold text-white truncate text-xs">Cermarys</span>
                    <span className="text-white/40 hidden sm:inline">·</span>
                    <span className="text-white/70 hidden sm:inline text-xs">Audio Hi-Fi Calma</span>
                  </div>
                  <BrandLogo variant="wordmark" color="#F5F2E6" size={85} />
                </div>
              </div>
            </div>
          )}

          {/* 02. INSTAGRAM REEL */}
          {activeTab === 'reel' && (
            <div className="w-full max-w-[320px] sm:max-w-sm mx-auto rounded-[32px] sm:rounded-[36px] bg-[#231C16] p-2.5 sm:p-3 shadow-2xl border-4 border-stone-800">
              <div className="rounded-[26px] sm:rounded-[30px] text-white p-4 sm:p-6 min-h-[470px] sm:min-h-[520px] flex flex-col justify-between relative overflow-hidden bg-black">
                {/* Background Editorial Studio Photography */}
                <img
                  src="/assets/aistudio/2ae7a4e2bb5f9c1bf032fe68d0b16bd5_c6e60589.jpg"
                  alt="Reel Mantra Meditación"
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/60 pointer-events-none" />

                {/* Phone Notch & Status */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-white/75 font-mono mb-4">
                  <span>09:41</span>
                  <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px]">REEL</span>
                  <span>5G 100%</span>
                </div>

                {/* Reel Header */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5F2E6] flex items-center justify-center p-1">
                    <BrandLogo variant="isotipo" color="#223189" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">mantra.yoga</div>
                    <div className="text-[10px] text-white/70">Taller Sábado · En directo</div>
                  </div>
                </div>

                {/* Graphic in Center */}
                <div className="relative z-10 my-auto py-3 text-left">
                  <span className="px-2.5 py-1 rounded-md bg-[#223189]/90 text-white text-[9px] tracking-widest uppercase font-mono font-semibold inline-block mb-2">
                    TALLER EN VIVO
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F2E6] leading-tight">
                    El Gesto de la Quietud
                  </h4>
                  <p className="text-xs text-white/90 max-w-[240px] mt-2 leading-relaxed">
                    Chin Mudra y respiración consciente: 20 minutos para resetear tu sistema nervioso.
                  </p>
                </div>

                {/* Reel Footer & Actions */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-white text-white" /> 2.1k
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" /> 486
                      </span>
                    </div>
                    <span className="text-[10px] text-white/60 font-mono">Audio original · Mantra</span>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-[#F5F2E6] text-[#231C16] text-xs font-semibold hover:bg-white transition-colors shadow-sm">
                    Reservar Cupo · Online & Presencial
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 03. GUÍA DIGITAL */}
          {activeTab === 'guia' && (
            <div className="w-full max-w-lg bg-[#FAF8F2] border-2 border-[#231C16]/15 rounded-3xl overflow-hidden shadow-2xl text-[#231C16] relative grid grid-cols-1 sm:grid-cols-12 min-h-[400px] sm:min-h-[460px]">
              {/* Left Column: Authentic Photography Cover */}
              <div className="sm:col-span-5 relative bg-[#231C16] overflow-hidden min-h-[180px] sm:min-h-full">
                <img
                  src="/assets/aistudio/d9adeebd97c9b87ca14cedad79e457e7_46a30507.jpg"
                  alt="Portada Guía Digital Mantra"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-white text-[10px] font-mono tracking-widest uppercase">
                  Vol. 01 · 2026
                </div>
              </div>

              {/* Right Column: Editorial Details */}
              <div className="sm:col-span-7 p-5 sm:p-8 flex flex-col justify-between bg-[#F5F2E6]">
                <div>
                  <div className="flex justify-between items-baseline text-xs pb-3 border-b border-[#231C16]/10 mb-4 sm:mb-5">
                    <span className="font-mono text-[10px] text-[#223189] uppercase tracking-widest font-semibold">
                      GUÍA DIGITAL OFICIAL
                    </span>
                    <span className="text-[11px] text-[#231C16]/50">PDF 32 Páginas</span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#676E56] font-semibold block mb-1">
                    Rutina Guiada · 15 Minutos
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#231C16] leading-tight mb-2 sm:mb-3">
                    Despertar Consciente
                  </h3>
                  <p className="text-xs text-[#231C16]/75 leading-relaxed font-sans mb-4">
                    Secuencia matutina ilustrada y fotografiada paso a paso para elongar las fascias, descomprimir vértebras y fijar la mente en el presente.
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#223189] font-medium bg-white/70 p-2.5 rounded-xl border border-[#231C16]/8">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Incluye esquemas anatómicos y glosario de asanas</span>
                  </div>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-[#231C16]/10 flex items-center justify-between text-xs mt-4">
                  <div>
                    <div className="font-semibold text-[#231C16]">Editorial Mantra</div>
                    <div className="text-[10px] text-[#231C16]/50">Descarga libre para alumnos</div>
                  </div>
                  <BrandLogo variant="wordmark" color="#223189" size={85} />
                </div>
              </div>
            </div>
          )}

          {/* 04. PASE ESTUDIO */}
          {activeTab === 'pase' && (
            <div className="w-full max-w-lg bg-[#231C16] text-[#F5F2E6] rounded-2xl p-5 sm:p-10 shadow-2xl border border-stone-800 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] relative overflow-hidden group">
              {/* Subtle real texture backdrop from stone twist photograph */}
              <img
                src="/assets/aistudio/d248055fa6edc5267d0a372a73fbc432_797cff6a.jpg"
                alt="Textura pase de estudio"
                className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale mix-blend-overlay pointer-events-none"
              />
              <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-[#7398C1]/20 blur-3xl pointer-events-none" />

              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#7398C1] block mb-1">
                    PASE ESTUDIO · PRESENCIAL
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F5F2E6]">
                    Membresía Mat
                  </h4>
                </div>
                <BrandLogo variant="isotipo" color="#7398C1" size={38} />
              </div>

              <div className="my-5 sm:my-6 z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/70">
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Titular</div>
                  <div className="font-semibold text-white mt-0.5 truncate">Sofía Valenzuela</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Acceso</div>
                  <div className="font-semibold text-[#7398C1] mt-0.5 truncate">Ilimitado · Mat</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">ID Pase</div>
                  <div className="font-mono text-[11px] text-white/80 mt-0.5">MNT-2026-084</div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between z-10 text-[10px] sm:text-[11px] text-white/50 gap-2">
                <span>Estudio Central Mantra · Sala Zen</span>
                <span className="font-mono text-[#7398C1]">Vigente 2026</span>
              </div>
            </div>
          )}

          {/* 05. MAT & TEXTIL */}
          {activeTab === 'mat' && (
            <div className="w-full max-w-2xl bg-[#676E56] rounded-2xl sm:rounded-3xl p-5 sm:p-12 text-[#F5F2E6] shadow-2xl relative overflow-hidden border border-[#525943]">
              {/* Central Mat Texture Line */}
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/20 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5F2E6]/70 mb-2">
                  Trama Continua para Mats y Textiles
                </span>

                <div className="py-6 w-full">
                  <BrandPattern color="#F5F2E6" rows={3} cols={5} />
                </div>

                <div className="mt-4 p-4 rounded-xl bg-black/20 backdrop-blur-xs max-w-md text-xs leading-relaxed text-[#F5F2E6]/90 border border-white/10">
                  <p className="font-semibold text-white mb-1">
                    Grabado Láser sobre Caucho Natural
                  </p>
                  El patrón actúa como guía visual de alineación para pies y manos durante las transiciones corporales.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
