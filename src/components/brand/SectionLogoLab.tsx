import React, { useState } from 'react';
import {
  BrandLogo,
  generateLogoSvgString,
  downloadSvgFile,
  exportLogoRaster,
} from './BrandLogo';
import { LogoVariant, SurfaceMode } from '../../types/brand';
import { Download, Sliders, Eye, LayoutGrid, Sparkles, Image, Check } from 'lucide-react';
import { downloadCompleteLogoSetZip } from '../../utils/logoZipExporter';

interface SectionLogoLabProps {
  onShowToast: (msg: string) => void;
}

export const SectionLogoLab: React.FC<SectionLogoLabProps> = ({ onShowToast }) => {
  const [selectedVariant, setSelectedVariant] = useState<LogoVariant>('full');
  const [selectedSurface, setSelectedSurface] = useState<SurfaceMode>('marfil');
  const [viewMode, setViewMode] = useState<'simulator' | 'masterBoard'>('simulator');
  const [exportFormat, setExportFormat] = useState<'svg' | 'png' | 'jpg'>('svg');
  const [exportWithBg, setExportWithBg] = useState<boolean>(false);

  // Surface configurations
  const surfaces = {
    marfil: {
      id: 'marfil',
      label: 'Lienzo Marfil',
      code: '#F5F2E6',
      bgClass: 'bg-[#F5F2E6]',
      logoColor: '#223189',
      accentColor: '#7398C1',
      borderClass: 'border-[#231C16]/10',
      textTone: 'text-[#231C16]',
    },
    indigo: {
      id: 'indigo',
      label: 'Sello Índigo',
      code: '#223189',
      bgClass: 'bg-[#223189]',
      logoColor: '#F5F2E6',
      accentColor: '#7398C1',
      borderClass: 'border-transparent',
      textTone: 'text-[#F5F2E6]',
    },
    cacao: {
      id: 'cacao',
      label: 'Versión Nocturna (Cacao)',
      code: '#231C16',
      bgClass: 'bg-[#231C16]',
      logoColor: '#F5F2E6',
      accentColor: '#7398C1',
      borderClass: 'border-transparent',
      textTone: 'text-[#F5F2E6]',
    },
    oliva: {
      id: 'oliva',
      label: 'Tierra Oliva',
      code: '#676E56',
      bgClass: 'bg-[#676E56]',
      logoColor: '#F5F2E6',
      accentColor: '#F5F2E6',
      borderClass: 'border-transparent',
      textTone: 'text-[#F5F2E6]',
    },
    cielo: {
      id: 'cielo',
      label: 'Brillo Cielo',
      code: '#7398C1',
      bgClass: 'bg-[#7398C1]',
      logoColor: '#223189',
      accentColor: '#F5F2E6',
      borderClass: 'border-transparent',
      textTone: 'text-[#231C16]',
    },
  };

  const [isZipping, setIsZipping] = useState<boolean>(false);

  const handleDownloadFullSetZip = async () => {
    if (isZipping) return;
    setIsZipping(true);
    onShowToast('Generando ZIP con todos los logos y variaciones (SVG, PNG, JPG · con y sin fondo)...');
    try {
      await downloadCompleteLogoSetZip();
      onShowToast('¡Set completo descargado en Mantra-Logos-Set-Completo.zip!');
    } catch {
      onShowToast('Error al generar el archivo ZIP');
    } finally {
      setIsZipping(false);
    }
  };

  const currentSurface = surfaces[selectedSurface];

  const handleDownloadActiveLogo = () => {
    const isWithBg = exportWithBg || exportFormat === 'jpg';
    const bgSuffix = isWithBg ? '-con-fondo' : '-sin-fondo';
    const filename = `mantra-logo-${selectedVariant}-${selectedSurface}${bgSuffix}.${exportFormat}`;

    if (exportFormat === 'svg') {
      const svgStr = generateLogoSvgString(
        selectedVariant,
        currentSurface.logoColor,
        exportWithBg,
        currentSurface.code
      );
      downloadSvgFile(filename, svgStr);
      onShowToast(`Archivo ${filename} descargado (${exportWithBg ? 'con fondo' : 'transparente'})`);
    } else {
      exportLogoRaster(
        selectedVariant,
        currentSurface.logoColor,
        exportFormat,
        exportWithBg,
        currentSurface.code,
        filename,
        () => {
          onShowToast(
            `Archivo ${filename} descargado (${isWithBg ? 'con fondo' : 'transparente'})`
          );
        }
      );
    }
  };

  const handleDownloadMasterFile = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/Mantra_logo_ee29c0a0.svg';
    link.download = 'Mantra_logo_master.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Archivo maestro original Mantra_logo_master.svg descargado');
  };

  return (
    <section id="logotipos" className="py-14 sm:py-20 border-b border-[#231C16]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#231C16]/10 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[#223189] font-semibold">
              02 · Sistema de Marca & Contrastes
            </span>
            <span className="text-xs text-[#231C16]/40 hidden sm:inline">·</span>
            <span className="text-xs text-[#231C16]/60">Nearo Rounded & Símbolo Oficial</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#231C16]/60">
            <button
              onClick={handleDownloadFullSetZip}
              disabled={isZipping}
              className="px-3.5 py-1.5 rounded-xl bg-[#223189] text-white font-semibold hover:bg-[#1a2569] transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-60"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Generando ZIP...' : 'Descargar todo el set (ZIP)'}</span>
            </button>
            <button
              onClick={handleDownloadMasterFile}
              className="text-[#223189] font-semibold hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Master SVG</span>
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#231C16]/8">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#231C16]">
              {viewMode === 'simulator'
                ? 'Laboratorio Interactivo de Superficies'
                : 'Tablero Maestro de Variaciones (Arte Oficial)'}
            </h3>
            <p className="text-xs text-[#231C16]/70 mt-0.5">
              {viewMode === 'simulator'
                ? 'Prueba el logo en tiempo real combinando variantes, escalas y fondos de marca.'
                : 'Matriz completa de identidad visual extraída directamente del archivo vectorial maestro.'}
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white/70 border border-[#231C16]/10 rounded-xl shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'simulator'
                  ? 'bg-[#223189] text-white shadow-xs'
                  : 'text-[#231C16]/70 hover:text-[#231C16]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Simulador</span>
            </button>
            <button
              onClick={() => setViewMode('masterBoard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'masterBoard'
                  ? 'bg-[#223189] text-white shadow-xs'
                  : 'text-[#231C16]/70 hover:text-[#231C16]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Tablero Maestro</span>
            </button>
          </div>
        </div>

        {/* MODE A: Interactive Simulator */}
        {viewMode === 'simulator' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
            {/* Main Visual Display Stage */}
            <div className="lg:col-span-8">
              <div
                className={`w-full min-h-[350px] sm:min-h-[460px] rounded-2xl ${currentSurface.bgClass} ${currentSurface.borderClass} border p-5 sm:p-8 md:p-14 flex flex-col justify-between items-center relative transition-colors duration-500 shadow-sm overflow-hidden`}
              >
                {/* Top metadata tags inside stage */}
                <div className="w-full flex items-center justify-between text-xs opacity-70 gap-2">
                  <span className="uppercase tracking-widest font-mono text-[10px] truncate">
                    Nearo Rounded · Geometría Orgánica Oficial
                  </span>
                  <span className="font-mono text-[10px] shrink-0">{currentSurface.code}</span>
                </div>

                {/* Center Logo Stage */}
                <div className="py-8 sm:py-14 my-auto flex items-center justify-center w-full overflow-hidden">
                  <BrandLogo
                    variant={selectedVariant}
                    color={currentSurface.logoColor}
                    accentColor={currentSurface.accentColor}
                    size={selectedVariant === 'isotipo' ? 220 : 360}
                  />
                </div>

                {/* Bottom Info & Download Toolbar inside stage */}
                <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-3 sm:gap-4 text-xs opacity-90 pt-4 border-t border-current/15">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold capitalize">{currentSurface.label}</span>
                    <span className="opacity-40">·</span>
                    <span className="capitalize">Variante: {selectedVariant}</span>
                  </div>

                  {/* Format (SVG, PNG, JPG) + Fondo (Sin Fondo, Con Fondo) + Action */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {/* Format Selector: SVG | PNG | JPG */}
                    <div className="flex items-center p-0.5 rounded-lg bg-black/15 backdrop-blur-xs border border-white/10">
                      {(['svg', 'png', 'jpg'] as const).map((fmt) => (
                        <button
                          key={fmt}
                          onClick={() => {
                            setExportFormat(fmt);
                            if (fmt === 'jpg') {
                              setExportWithBg(true);
                            }
                          }}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono uppercase font-semibold transition-all ${
                            exportFormat === fmt
                              ? 'bg-white text-[#231C16] shadow-xs'
                              : 'text-current/80 hover:text-current'
                          }`}
                        >
                          {fmt}
                        </button>
                      ))}
                    </div>

                    {/* Background Toggle: Sin Fondo vs Con Fondo */}
                    <div className="flex items-center p-0.5 rounded-lg bg-black/15 backdrop-blur-xs border border-white/10">
                      <button
                        onClick={() => setExportWithBg(false)}
                        disabled={exportFormat === 'jpg'}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          !exportWithBg && exportFormat !== 'jpg'
                            ? 'bg-white text-[#231C16] shadow-xs font-semibold'
                            : 'text-current/80 hover:text-current disabled:opacity-40 disabled:cursor-not-allowed'
                        }`}
                        title={
                          exportFormat === 'jpg'
                            ? 'El formato JPG no admite transparencia'
                            : 'Exportar con fondo transparente'
                        }
                      >
                        Sin fondo
                      </button>
                      <button
                        onClick={() => setExportWithBg(true)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          exportWithBg || exportFormat === 'jpg'
                            ? 'bg-white text-[#231C16] shadow-xs font-semibold'
                            : 'text-current/80 hover:text-current'
                        }`}
                        title="Exportar con el color de fondo actual"
                      >
                        Con fondo
                      </button>
                    </div>

                    {/* Download Trigger */}
                    <button
                      onClick={handleDownloadActiveLogo}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/35 active:scale-[0.98] backdrop-blur-xs text-current font-semibold transition-all border border-white/10 shadow-xs"
                      title={`Descargar archivo ${exportFormat.toUpperCase()} (${
                        exportWithBg || exportFormat === 'jpg' ? 'con fondo' : 'sin fondo'
                      })`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar {exportFormat.toUpperCase()}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Controls Panel */}
            <div className="lg:col-span-4 bg-white/70 border border-[#231C16]/10 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#223189] font-semibold pb-4 border-b border-[#231C16]/10">
                <Sliders className="w-3.5 h-3.5" />
                <span>Selector de Contrastes</span>
              </div>

              {/* Surface Selector */}
              <div>
                <label className="text-xs font-semibold uppercase text-[#231C16]/70 tracking-wider block mb-3">
                  1. Fondo de Aplicación
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {Object.values(surfaces).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSurface(s.id as SurfaceMode)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left text-xs transition-all ${
                        selectedSurface === s.id
                          ? 'border-[#223189] ring-2 ring-[#223189]/20 shadow-xs'
                          : 'border-[#231C16]/10 hover:border-[#231C16]/30'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-md border border-black/10 shrink-0"
                        style={{ backgroundColor: s.code }}
                      />
                      <div className="truncate min-w-0">
                        <div className="font-medium text-[#231C16] truncate text-[11px] sm:text-xs">{s.label}</div>
                        <div className="text-[10px] text-[#231C16]/50 font-mono">{s.code}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Variant Selector */}
              <div>
                <label className="text-xs font-semibold uppercase text-[#231C16]/70 tracking-wider block mb-3">
                  2. Componente de Marca
                </label>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedVariant('full')}
                    className={`w-full py-2.5 px-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedVariant === 'full'
                        ? 'border-[#223189] bg-[#223189]/5 text-[#223189] font-semibold'
                        : 'border-[#231C16]/10 text-[#231C16]/80 hover:bg-[#231C16]/5'
                    }`}
                  >
                    <span>Logotipo Principal Completo</span>
                    <span className="text-[10px] opacity-60">○ + Wordmark + ∞</span>
                  </button>

                  <button
                    onClick={() => setSelectedVariant('isotipo')}
                    className={`w-full py-2.5 px-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedVariant === 'isotipo'
                        ? 'border-[#223189] bg-[#223189]/5 text-[#223189] font-semibold'
                        : 'border-[#231C16]/10 text-[#231C16]/80 hover:bg-[#231C16]/5'
                    }`}
                  >
                    <span>Isotipo de Meditación</span>
                    <span className="text-[10px] opacity-60">Humanoide Zen</span>
                  </button>

                  <button
                    onClick={() => setSelectedVariant('wordmark')}
                    className={`w-full py-2.5 px-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedVariant === 'wordmark'
                        ? 'border-[#223189] bg-[#223189]/5 text-[#223189] font-semibold'
                        : 'border-[#231C16]/10 text-[#231C16]/80 hover:bg-[#231C16]/5'
                    }`}
                  >
                    <span>Wordmark Mantra</span>
                    <span className="text-[10px] opacity-60">Nearo Rounded Puro</span>
                  </button>
                </div>
              </div>

              {/* Design Spec Note & Full Set Download */}
              <div className="p-4 rounded-xl bg-[#F5F2E6] border border-[#231C16]/8 text-xs text-[#231C16]/70 leading-relaxed space-y-3">
                <div>
                  <p className="font-semibold text-[#223189] mb-1">
                    Vectores Originales Calibrados
                  </p>
                  Los trazados de cada letra ('M', 'a', 'n', 't', 'r', 'a') están integrados punto a punto con las curvas exactas del manual.
                </div>
                <button
                  onClick={handleDownloadFullSetZip}
                  disabled={isZipping}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#223189] hover:bg-[#1a2569] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs disabled:opacity-60"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isZipping ? 'Empaquetando ZIP...' : 'Descargar todo el set (ZIP)'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* MODE B: Full Master Grid Board (As in the client image) */
          <div className="mb-16">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0C09] border border-stone-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between text-xs text-white/60 mb-6 pb-4 border-b border-white/10">
                <span className="font-mono text-[#7398C1] uppercase tracking-widest">
                  Tablero Vectorial Maestro Oficial · Mantra Lookbook
                </span>
                <span className="text-white/40">1680 × 768 px</span>
              </div>

              {/* Render the actual Master SVG from the public workspace */}
              <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-2 sm:p-6">
                <img
                  src="/assets/aistudio/Mantra_logo_ee29c0a0.svg"
                  alt="Tablero maestro de logotipos y variaciones de Mantra"
                  className="w-full h-auto max-h-[600px] object-contain shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
                <p>
                  Incluye las 3 variaciones en fondos oscuros (Índigo, Oliva, Cacao), las versiones sobre Cacao profundo (Cielo y Marfil), los isotipos sobre Marfil y Blanco, y el wordmark puro.
                </p>
                <button
                  onClick={handleDownloadMasterFile}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#223189] text-white font-medium hover:bg-[#1b266e] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Archivo SVG Maestro</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Brand System Variations Grid (Replicating PDF Page 1 & 2 with the exact vector paths) */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[#231C16]/10">
            <h3 className="font-display text-xl text-[#231C16] font-semibold">
              Variaciones Cromáticas de Marca
            </h3>
            <button
              onClick={handleDownloadFullSetZip}
              disabled={isZipping}
              className="text-xs font-semibold text-[#223189] hover:underline flex items-center gap-1.5 disabled:opacity-60"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Generando ZIP...' : 'Descargar todo el set (ZIP: SVG, PNG, JPG)'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Índigo sobre Marfil */}
            <div className="p-8 rounded-2xl bg-[#F5F2E6] border border-[#231C16]/10 flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-[#231C16]/50 flex justify-between">
                <span>Versión Principal</span>
                <span>Luz</span>
              </div>
              <BrandLogo variant="full" color="#223189" size={240} />
              <div className="w-full text-center text-xs text-[#223189] font-medium pt-3 border-t border-[#231C16]/8">
                Índigo sobre Marfil
              </div>
            </div>

            {/* Card 2: Marfil sobre Índigo */}
            <div className="p-8 rounded-2xl bg-[#223189] text-white flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-white/50 flex justify-between">
                <span>Sello de Impacto</span>
                <span>Enfoque</span>
              </div>
              <BrandLogo variant="full" color="#F5F2E6" accentColor="#7398C1" size={240} />
              <div className="w-full text-center text-xs text-[#7398C1] font-medium pt-3 border-t border-white/10">
                Sello Principal · Índigo & Marfil
              </div>
            </div>

            {/* Card 3: Versión Nocturna Cacao */}
            <div className="p-8 rounded-2xl bg-[#231C16] text-white flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-white/50 flex justify-between">
                <span>Versión Nocturna</span>
                <span>Calma Profunda</span>
              </div>
              <BrandLogo variant="full" color="#F5F2E6" accentColor="#7398C1" size={240} />
              <div className="w-full text-center text-xs text-[#7398C1] font-medium pt-3 border-t border-white/10">
                Versión Nocturna · Cacao & Cielo
              </div>
            </div>

            {/* Card 4: Oliva sobre Marfil */}
            <div className="p-8 rounded-2xl bg-[#F5F2E6] border border-[#231C16]/10 flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-[#231C16]/50 flex justify-between">
                <span>Variación Tierra</span>
                <span>Orgánico</span>
              </div>
              <BrandLogo variant="full" color="#676E56" size={240} />
              <div className="w-full text-center text-xs text-[#676E56] font-medium pt-3 border-t border-[#231C16]/8">
                Oliva sobre Marfil
              </div>
            </div>

            {/* Card 5: Isotipo de Meditación */}
            <div className="p-8 rounded-2xl bg-[#F5F2E6] border border-[#231C16]/10 flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-[#231C16]/50 flex justify-between">
                <span>Isotipo de Meditación</span>
                <span>Humanoide Zen</span>
              </div>
              <div className="flex items-center gap-8 py-2">
                <BrandLogo variant="isotipo" color="#7398C1" size={85} />
                <BrandLogo variant="isotipo" color="#223189" size={85} />
              </div>
              <div className="w-full text-center text-xs text-[#223189] font-medium pt-3 border-t border-[#231C16]/8">
                Isotipo en Cielo & Índigo
              </div>
            </div>

            {/* Card 6: Wordmark puro en Cacao */}
            <div className="p-8 rounded-2xl bg-[#231C16] text-white flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-full text-[11px] text-white/50 flex justify-between">
                <span>Wordmark Sintético</span>
                <span>Nearo Rounded</span>
              </div>
              <BrandLogo variant="wordmark" color="#7398C1" size={240} />
              <div className="w-full text-center text-xs text-[#7398C1] font-medium pt-3 border-t border-white/10">
                Wordmark Cielo sobre Cacao
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
