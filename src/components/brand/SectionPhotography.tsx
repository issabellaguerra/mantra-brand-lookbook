import React, { useState } from 'react';
import { Camera, Eye, Sparkles, Maximize2, Compass, Sun, Sliders, Download } from 'lucide-react';

export interface BrandPhoto {
  id: string;
  title: string;
  subtitle: string;
  asana: string;
  category: string;
  src: string;
  aspectRatio: string;
  lighting: string;
  intention: string;
  palettes: string[];
}

export const BRAND_PHOTOS: BrandPhoto[] = [
  {
    id: 'adho-mukha',
    title: 'Adho Mukha Svanasana',
    subtitle: 'Elongación & Arraigo Posterior',
    asana: 'Perro boca abajo',
    category: 'Movilidad & Extensión',
    src: '/assets/aistudio/9af3149bfcccd796159f25bbb5097d4b_97042f37.jpg',
    aspectRatio: '9:16',
    lighting: 'Luz rasante suave sobre fondo neutro marfil',
    intention: 'Foco en la tracción de los hombros, el peso repartido en las palmas y la columna elongada sin tensión cervical.',
    palettes: ['#F5F2E6', '#231C16', '#7398C1'],
  },
  {
    id: 'torsion-organica',
    title: 'Torsión & Presencia Táctil',
    subtitle: 'Conexión Costal & Escucha Corporal',
    asana: 'Alineación de columna',
    category: 'Respiración & Tacto',
    src: '/assets/aistudio/d248055fa6edc5267d0a372a73fbc432_797cff6a.jpg',
    aspectRatio: '2:3',
    lighting: 'Sol cenital suave sobre textura mineral de granito',
    intention: 'Planos cerrados que capturan la respiración en las costillas, la textura viva de la piel y el contacto consciente de las manos.',
    palettes: ['#F5F2E6', '#676E56', '#231C16'],
  },
  {
    id: 'balasana-descanso',
    title: 'Balasana (Postura del Niño)',
    subtitle: 'Rendición Consciente & Quietud',
    asana: 'Pausa reparadora',
    category: 'Descanso & Gravedad',
    src: '/assets/aistudio/f0276d69c888ea190fbf51f614c2751d_55af7769.jpg',
    aspectRatio: '5:4',
    lighting: 'Tonalidad sepia atenuada con transición suave de sombras',
    intention: 'Simboliza la entrega del peso corporal a la gravedad terrestre, la desaceleración del ritmo cardíaco y la vuelta al centro.',
    palettes: ['#F5F2E6', '#231C16', '#223189'],
  },
  {
    id: 'gyan-mudra-luz',
    title: 'Gyan Mudra en Luz Natural',
    subtitle: 'Silencio Mental & Apertura',
    asana: 'Postura de meditación',
    category: 'Meditación & Enfoque',
    src: '/assets/aistudio/d9adeebd97c9b87ca14cedad79e457e7_46a30507.jpg',
    aspectRatio: '2:3',
    lighting: 'Luz diurna difusa sobre esterilla de lino',
    intention: 'El gesto del pulgar y el índice uniendo mente y cuerpo; tonalidades neutras que transmiten ligereza matutina y claridad.',
    palettes: ['#F5F2E6', '#7398C1', '#676E56'],
  },
  {
    id: 'chin-mudra-estudio',
    title: 'Chin Mudra · Estudio Minimalista',
    subtitle: 'Escultura Humana & Geometría Zen',
    asana: 'Medio loto en reposo',
    category: 'Monocromo & Arquetipo',
    src: '/assets/aistudio/2ae7a4e2bb5f9c1bf032fe68d0b16bd5_c6e60589.jpg',
    aspectRatio: '2:3',
    lighting: 'Blanco y negro de alto contraste con gradiente limpio',
    intention: 'Foco escultórico en la sobriedad del asana; elimina cualquier distracción para celebrar la arquitectura orgánica del cuerpo en calma.',
    palettes: ['#231C16', '#F5F2E6', '#223189'],
  },
];

export const SectionPhotography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<BrandPhoto>(BRAND_PHOTOS[0]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<BrandPhoto | null>(null);

  const filteredPhotos = activeFilter === 'all'
    ? BRAND_PHOTOS
    : BRAND_PHOTOS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="fotografia" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              07 · Fotografía & Atmósfera
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Dirección de Arte Visual</span>
          </div>
          <div className="text-xs text-[#231C16]/50">
            Luz Natural Rasante · Silencio Compositivo · Texturas Orgánicas
          </div>
        </div>

        {/* Narrative Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12 items-center">
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#231C16] mb-3">
              El Cuerpo Habla en el Silencio
            </h3>
            <p className="text-xs sm:text-sm text-[#231C16]/75 max-w-xl leading-relaxed">
              La dirección fotográfica de Mantra rechaza las posturas acrobáticas forzadas y los filtros artificiales. Cada toma documenta la respiración real, el contacto íntimo con la esterilla, la piel viva y el sosiego del movimiento consciente.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <div className="p-4 rounded-xl bg-white/70 border border-[#231C16]/10 shadow-xs max-w-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#223189] mb-1">
                <Sun className="w-3.5 h-3.5" />
                <span>Luz Natural Directa</span>
              </div>
              <p className="text-[11px] text-[#231C16]/65 leading-relaxed">
                Sombras suaves matutinas y vespertinas que moldean la silueta con delicadeza sin contrastes agresivos.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Main Stage (Hero Photo + Detail Sheet) */}
        <div className="bg-white rounded-3xl border border-[#231C16]/12 overflow-hidden shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-12">
          {/* Main Visual Display */}
          <div className="lg:col-span-7 bg-[#231C16] relative min-h-[340px] sm:min-h-[500px] flex items-center justify-center overflow-hidden group">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full h-full object-cover max-h-[580px] transition-transform duration-700 group-hover:scale-102"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-xs">
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#F5F2E6] font-mono text-[10px] uppercase tracking-widest border border-white/10">
                {selectedPhoto.category}
              </span>
              <button
                onClick={() => setLightboxPhoto(selectedPhoto)}
                className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#231C16] backdrop-blur-md transition-colors"
                title="Ampliar fotografía"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Floating Title */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[11px] font-mono text-[#7398C1] uppercase tracking-wider mb-0.5">
                {selectedPhoto.asana}
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F2E6]">
                {selectedPhoto.title}
              </h4>
            </div>
          </div>

          {/* Right: Technical Curation Panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#FAF8F2] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#231C16]/10 mb-6 text-xs">
                <span className="font-mono text-[10px] text-[#223189] uppercase tracking-widest font-semibold">
                  Ficha de Dirección de Arte
                </span>
                <span className="text-[#231C16]/40 font-mono text-[10px]">
                  ID: {selectedPhoto.id}
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#676E56] block mb-1">
                    Propósito Visual
                  </span>
                  <p className="text-xs text-[#231C16]/80 leading-relaxed font-sans">
                    {selectedPhoto.intention}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#676E56] block mb-1">
                    Iluminación & Tratamiento
                  </span>
                  <p className="text-xs text-[#231C16]/80 leading-relaxed font-sans">
                    {selectedPhoto.lighting}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#676E56] block mb-1.5">
                    Paleta de Tonos en Escena
                  </span>
                  <div className="flex items-center gap-2">
                    {selectedPhoto.palettes.map((hex) => (
                      <div
                        key={hex}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-[#231C16]/10 text-[10px] font-mono"
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="text-[#231C16]/70">{hex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#231C16]/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#676E56] block mb-2">
                    Aplicaciones Recomendadas
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#231C16]/10 text-[#231C16]/70">
                      Portadas de Guías Digitales
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#231C16]/10 text-[#231C16]/70">
                      Cabeceras Web & App
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#231C16]/10 text-[#231C16]/70">
                      Editorial Impreso
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action to open full resolution */}
            <div className="pt-6 mt-6 border-t border-[#231C16]/10 flex items-center justify-between">
              <span className="text-[11px] text-[#231C16]/50">
                Resolución nativa de campaña
              </span>
              <a
                href={selectedPhoto.src}
                target="_blank"
                rel="noreferrer"
                download={`mantra-campana-${selectedPhoto.id}.jpg`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#223189] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Fotografía</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5-Photo Editorial Carousel / Grid Selector */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#231C16]">
              Galería de la Campaña (5 Tomas Oficiales)
            </span>
            <span className="text-[11px] text-[#231C16]/50">
              Haz clic en cualquier toma para visualizar su ficha
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRAND_PHOTOS.map((photo) => {
              const isSelected = selectedPhoto.id === photo.id;
              return (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group rounded-2xl overflow-hidden border text-left transition-all relative flex flex-col ${
                    isSelected
                      ? 'border-[#223189] ring-2 ring-[#223189]/30 shadow-md'
                      : 'border-[#231C16]/12 bg-white hover:border-[#223189]/50 hover:shadow-xs'
                  }`}
                >
                  <div className="h-44 sm:h-52 w-full overflow-hidden bg-[#231C16] relative">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isSelected && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#223189] text-white text-[9px] font-mono tracking-wider uppercase font-semibold">
                        Activa
                      </span>
                    )}
                  </div>
                  <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#676E56] truncate">
                        {photo.asana}
                      </div>
                      <div className="font-semibold text-xs text-[#231C16] leading-snug line-clamp-1 mt-0.5">
                        {photo.title}
                      </div>
                    </div>
                    <div className="text-[10px] text-[#231C16]/50 mt-1">
                      {photo.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Core Rules of Mantra Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#231C16]/10">
          <div className="p-6 rounded-2xl bg-white/60 border border-[#231C16]/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#223189] font-bold block mb-2">
              Regla 01 · Verdad Anatómica
            </span>
            <h5 className="font-display text-base font-semibold text-[#231C16] mb-1">
              Sin Artificios ni Torsiones Extremas
            </h5>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Priorizar la comodidad de la respiración sobre la estética circense. Buscamos que cualquier persona sienta que ese cuerpo puede ser el suyo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 border border-[#231C16]/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#223189] font-bold block mb-2">
              Regla 02 · Luz Orgánica
            </span>
            <h5 className="font-display text-base font-semibold text-[#231C16] mb-1">
              Difusión Natural de Estudio
            </h5>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Evitar flashes duros y saturaciones sintéticas. La paleta lumínica debe reflejar la textura del lino, el granito suave y la calidez del hogar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 border border-[#231C16]/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#223189] font-bold block mb-2">
              Regla 03 · Silencio Visual
            </span>
            <h5 className="font-display text-base font-semibold text-[#231C16] mb-1">
              Composiciones Despejadas
            </h5>
            <p className="text-xs text-[#231C16]/70 leading-relaxed">
              Espacio negativo generoso que permita al logotipo y a la tipografía Nearo Rounded convivir sin competir con la imagen.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[94vh] bg-[#231C16] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs hover:bg-black transition-colors"
            >
              Cerrar
            </button>
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-black min-h-[240px] p-2">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-w-full max-h-[62vh] sm:max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-[#1A1410] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#F5F2E6]">
                  {lightboxPhoto.title}
                </h4>
                <p className="text-white/60 text-[11px] mt-0.5">
                  {lightboxPhoto.lighting}
                </p>
              </div>
              <a
                href={lightboxPhoto.src}
                download={`mantra-${lightboxPhoto.id}.jpg`}
                className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-[#223189] text-white font-medium hover:bg-[#1a2569] transition-colors"
              >
                Descargar original
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
