import React from 'react';
import { Download } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface TopBarProps {
  onOpenBrandKit: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBrandKit }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F5F2E6]/95 backdrop-blur-md border-b border-[#231C16]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Official Full Logo (Foco ○ + Mantra Wordmark + Lazo Infinito ∞) */}
        <a
          href="#esencia"
          className="flex items-center py-1 shrink-0 hover:opacity-85 transition-opacity"
          aria-label="Mantra - Volver al inicio"
        >
          <div className="hidden sm:block">
            <BrandLogo variant="full" color="#223189" size={115} />
          </div>
          <div className="sm:hidden">
            <BrandLogo variant="full" color="#223189" size={96} />
          </div>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#231C16]/75">
          <a
            href="#esencia"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Esencia
          </a>
          <a
            href="#logotipos"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Logotipos
          </a>
          <a
            href="#simbolo"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Símbolo
          </a>
          <a
            href="#paleta"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Paleta
          </a>
          <a
            href="#tipografia"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Tipografía
          </a>
          <a
            href="#ilustracion"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Ilustración
          </a>
          <a
            href="#fotografia"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Fotografía
          </a>
          <a
            href="#universo"
            className="hover:text-[#223189] transition-colors whitespace-nowrap shrink-0"
          >
            Universo
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBrandKit}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#F5F2E6] bg-[#223189] rounded-lg hover:bg-[#1a2569] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span><span className="hidden sm:inline">Descargar </span>Kit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
