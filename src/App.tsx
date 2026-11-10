import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TopBar } from './components/brand/TopBar';
import { ChapterNav } from './components/brand/ChapterNav';
import { SectionEssence } from './components/brand/SectionEssence';
import { SectionLogoLab } from './components/brand/SectionLogoLab';
import { SectionAnatomy } from './components/brand/SectionAnatomy';
import { SectionChromatic } from './components/brand/SectionChromatic';
import { SectionTypography } from './components/brand/SectionTypography';
import { SectionIllustrations } from './components/brand/SectionIllustrations';
import { SectionPhotography } from './components/brand/SectionPhotography';
import { SectionLiveUniverse } from './components/brand/SectionLiveUniverse';
import { BrandKitModal } from './components/brand/BrandKitModal';
import { BrandLogo } from './components/brand/BrandLogo';
import { Toast } from './components/ui/Toast';
import { ArrowUp, Download, Sparkles } from 'lucide-react';

// Reusable editorial fade-in wrapper for sections
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [activeChapter, setActiveChapter] = useState<string>('esencia');
  const [isKitOpen, setIsKitOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Scroll spy to highlight active chapter
  useEffect(() => {
    const sectionIds = [
      'esencia',
      'logotipos',
      'simbolo',
      'paleta',
      'tipografia',
      'ilustracion',
      'fotografia',
      'universo',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F2E6] text-[#231C16] flex flex-col font-sans selection:bg-[#223189] selection:text-[#F5F2E6]">
      {/* 3-Zone Contract Header */}
      <TopBar onOpenBrandKit={() => setIsKitOpen(true)} />

      {/* Chapter Indicator & Quick Jump Rail */}
      <ChapterNav activeChapter={activeChapter} />

      {/* Main Editorial Content Stream (Chapters 01 - 07 with Framer Motion Fade-In) */}
      <main className="flex-1">
        {/* 01 · Esencia & Manifiesto */}
        <FadeInSection>
          <SectionEssence />
        </FadeInSection>

        {/* 02 · Sistema de Marca & Contrastes (Nearo Rounded) */}
        <FadeInSection>
          <SectionLogoLab onShowToast={showToast} />
        </FadeInSection>

        {/* 03 · Anatomía Visual del Símbolo */}
        <FadeInSection>
          <SectionAnatomy />
        </FadeInSection>

        {/* 04 · Arquitectura Cromática Proporcional */}
        <FadeInSection>
          <SectionChromatic onShowToast={showToast} />
        </FadeInSection>

        {/* 05 · Expresión Tipográfica (Nearo Rounded, Philosopher, DM Sans) */}
        <FadeInSection>
          <SectionTypography />
        </FadeInSection>

        {/* 06 · Universo Ilustrado: Cuerpo & Movimiento */}
        <FadeInSection>
          <SectionIllustrations />
        </FadeInSection>

        {/* 07 · Fotografía & Atmósfera (Dirección de Arte de Campaña) */}
        <FadeInSection>
          <SectionPhotography />
        </FadeInSection>

        {/* 08 · Universo en Vivo: Online & Presencial */}
        <FadeInSection>
          <SectionLiveUniverse />
        </FadeInSection>
      </main>

      {/* Editorial Footer */}
      <footer className="bg-[#231C16] text-[#F5F2E6] pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
            {/* Left: Brand Identity Summary */}
            <div className="max-w-md">
              <div className="mb-4">
                <BrandLogo variant="full" color="#F5F2E6" size={150} />
              </div>
              <p className="text-xs text-[#F5F2E6]/75 leading-relaxed font-light mb-4">
                “Abrir espacio en el cuerpo, soltar rigidez y habitar la calma en cada movimiento.” Sistema de identidad visual para yoga, movilidad y bienestar consciente.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#7398C1]">
                <span>Online & Presencial</span>
                <span>·</span>
                <span>Nearo Rounded</span>
                <span>·</span>
                <span>Philosopher</span>
              </div>
            </div>

            {/* Right: Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsKitOpen(true)}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#223189] text-white text-xs font-semibold hover:bg-[#1b266e] transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Brand Kit Completo</span>
              </button>

              <button
                onClick={scrollToTop}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5F2E6] text-xs font-medium transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

          {/* Bottom Legal & Colophon */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-white/50">
            <div>
              Mantra — Brand Lookbook & Universo Gráfico · Edición 2026
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
              <span>Hecho por Issabella Guerra</span>
              <span>·</span>
              <span>Manual de Identidad Visual</span>
              <span>·</span>
              <span>Todos los derechos reservados</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Brand Asset Kit Modal */}
      <BrandKitModal
        isOpen={isKitOpen}
        onClose={() => setIsKitOpen(false)}
        onShowToast={showToast}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
