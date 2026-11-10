import React from 'react';

interface ChapterNavProps {
  activeChapter: string;
}

const chapters = [
  { id: 'esencia', num: '01', label: 'Esencia' },
  { id: 'logotipos', num: '02', label: 'Logotipos' },
  { id: 'simbolo', num: '03', label: 'Símbolo' },
  { id: 'paleta', num: '04', label: 'Paleta' },
  { id: 'tipografia', num: '05', label: 'Tipografía' },
  { id: 'ilustracion', num: '06', label: 'Ilustración' },
  { id: 'fotografia', num: '07', label: 'Fotografía' },
  { id: 'universo', num: '08', label: 'Universo' },
];

export const ChapterNav: React.FC<ChapterNavProps> = ({ activeChapter }) => {
  return (
    <div className="border-b border-[#231C16]/10 bg-[#F5F2E6]/85 backdrop-blur-md sticky top-16 sm:top-20 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 overflow-x-auto no-scrollbar touch-pan-x">
        <div className="flex items-center justify-between min-w-max gap-4 sm:gap-8 text-xs font-medium text-[#231C16]/70">
          <span className="hidden md:inline-block uppercase tracking-widest text-[#231C16]/50 text-[10px] font-sans">
            Brand Lookbook Interactivo
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === ch.id;
              return (
                <React.Fragment key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className={`flex items-center gap-1 sm:gap-1.5 transition-colors group py-1 ${
                      isActive
                        ? 'text-[#223189] font-semibold'
                        : 'text-[#231C16]/65 hover:text-[#231C16]'
                    }`}
                  >
                    <span
                      className={`text-[10px] transition-colors font-mono ${
                        isActive
                          ? 'text-[#223189]'
                          : 'text-[#231C16]/40 group-hover:text-[#231C16]/70'
                      }`}
                    >
                      {ch.num}
                    </span>
                    <span className="tracking-wide text-xs">{ch.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#223189] ml-0.5" />
                    )}
                  </a>
                  {idx < chapters.length - 1 && (
                    <span className="text-[#231C16]/20 select-none font-light">·</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
