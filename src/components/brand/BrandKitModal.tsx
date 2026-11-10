import React, { useState, useMemo } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileCode,
  Palette,
  Type,
  Award,
  Search,
  Feather,
  Filter,
  Camera,
} from 'lucide-react';
import {
  BrandLogo,
  generateLogoSvgString,
  downloadSvgFile,
  exportLogoRaster,
} from './BrandLogo';
import { BrandIllustration } from './BrandIllustrations';
import { downloadCompleteLogoSetZip } from '../../utils/logoZipExporter';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

type ResourceCategory = 'all' | 'logos' | 'fuentes' | 'ilustraciones' | 'fotografias' | 'colores';

export const BrandKitModal: React.FC<BrandKitModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');

  const downloadLogoAsset = (
    name: string,
    variant: 'full' | 'isotipo' | 'wordmark',
    color: string
  ) => {
    const filename = `mantra-${name}-sin-fondo.svg`;
    const svgStr = generateLogoSvgString(variant, color);
    downloadSvgFile(filename, svgStr);
    onShowToast(`Archivo ${filename} descargado sin fondo (transparente)`);
  };

  const downloadMasterVector = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/Mantra_logo_ee29c0a0.svg';
    link.download = 'Mantra_logo_master.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Archivo maestro completo Mantra_logo_master.svg descargado');
  };

  const downloadMeditationIllustration = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/2Recurso_4_53b5c0b0.svg';
    link.download = 'Mantra_ilustracion_presencia_quietud.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Ilustración oficial de Presencia Consciente descargada sin fondo');
  };

  const downloadEquilibrioIllustration = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/2Recurso_5_f5201543.svg';
    link.download = 'Mantra_ilustracion_equilibrio_natarajasana.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Ilustración oficial de Equilibrio (2Recurso_5.svg) descargada sin fondo');
  };

  const downloadExtensionIllustration = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/2Recurso_6_b8835f27.svg';
    link.download = 'Mantra_ilustracion_amplitud_extension.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Ilustración oficial de Extensión (2Recurso_6.svg) descargada sin fondo');
  };

  const downloadGatitoIllustration = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/2Recurso_7_715d5d1e.svg';
    link.download = 'Mantra_ilustracion_desperezo_gatito.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Ilustración oficial de Desperezo Felino (2Recurso_7.svg) descargada sin fondo');
  };

  const downloadComunidadIllustration = () => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/2Recurso_8_ef0e6e44.svg';
    link.download = 'Mantra_ilustracion_comunidad_online.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Ilustración oficial de Comunidad Online (2Recurso_8.svg) descargada sin fondo');
  };

  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<string>('');

  const downloadAllKit = async () => {
    if (isZipping) return;
    setIsZipping(true);
    setZipProgress('Generando ZIP...');
    onShowToast('Generando ZIP con todos los logos (SVG, PNG, JPG · con y sin fondo en toda la paleta)...');
    try {
      await downloadCompleteLogoSetZip((status) => {
        setZipProgress(status);
      });
      onShowToast('¡Descarga completada! Mantra-Logos-Set-Completo.zip');
    } catch {
      onShowToast('Error al generar el archivo ZIP');
    } finally {
      setIsZipping(false);
      setZipProgress('');
    }
  };

  const copyColor = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    onShowToast(`Código ${hex} de ${name} copiado al portapapeles`);
  };

  // Raw resources data for filtering
  const logoItems = [
    {
      id: 'logo-master',
      name: 'Archivo Maestro Oficial (Mantra_logo.svg)',
      category: 'logos',
      categoryLabel: 'Vectores',
      subtitle: 'Matriz completa de variaciones, contrastes y swatches',
      tags: ['master', 'oficial', 'completo', 'svg', 'tablero', 'logo'],
      type: 'master',
      action: downloadMasterVector,
    },
    {
      id: 'logo-principal',
      name: 'Logotipo Principal (Índigo)',
      category: 'logos',
      categoryLabel: 'Logotipos',
      subtitle: 'Símbolo + Nearo Rounded (Vector transparente sin fondo)',
      tags: ['logo', 'principal', 'indigo', 'marfil', 'nearo rounded', 'completo', 'sin fondo', 'transparente'],
      type: 'logo',
      action: () =>
        downloadLogoAsset('logo-principal-indigo', 'full', '#223189'),
    },
    {
      id: 'logo-negativo',
      name: 'Logotipo Negativo (Marfil)',
      category: 'logos',
      categoryLabel: 'Logotipos',
      subtitle: 'Para aplicar sobre fondos oscuros (Vector transparente sin fondo)',
      tags: ['logo', 'negativo', 'blanco', 'marfil', 'cacao', 'oscuro', 'sin fondo', 'transparente'],
      type: 'logo',
      action: () =>
        downloadLogoAsset('logo-negativo-marfil', 'full', '#F5F2E6'),
    },
    {
      id: 'logo-isotipo',
      name: 'Isotipo de Meditación',
      category: 'logos',
      categoryLabel: 'Isotipos',
      subtitle: 'Humanoide Zen Oficial Transparente (○ + ∞ sin fondo)',
      tags: ['isotipo', 'simbolo', 'zen', 'icono', 'meditacion', 'infinito', 'sin fondo', 'transparente'],
      type: 'logo',
      action: () =>
        downloadLogoAsset('isotipo-meditacion', 'isotipo', '#223189'),
    },
    {
      id: 'logo-wordmark',
      name: 'Wordmark Mantra (Nearo Rounded)',
      category: 'logos',
      categoryLabel: 'Logotipos',
      subtitle: 'Tipografía Nearo Rounded pura (Vector transparente sin fondo)',
      tags: ['wordmark', 'texto', 'nearo rounded', 'nombre', 'letras', 'sin fondo', 'transparente'],
      type: 'logo',
      action: () =>
        downloadLogoAsset('wordmark-nearo-rounded', 'wordmark', '#223189'),
    },
  ];

  const fontItems = [
    {
      id: 'font-nearo',
      name: 'Nearo Rounded',
      category: 'fuentes',
      categoryLabel: 'Tipografías',
      subtitle: 'Tipografía oficial del logotipo (Digitype Studio)',
      tags: ['fuente', 'tipografia', 'nearo rounded', 'logo', 'curvas', 'organica'],
      spec: 'Alto contraste, trazos capilares y astas gruesas redondeadas',
    },
    {
      id: 'font-philosopher',
      name: 'Philosopher',
      category: 'fuentes',
      categoryLabel: 'Tipografías',
      subtitle: 'Titulares, citas editoriales y manifiesto visual',
      tags: ['fuente', 'tipografia', 'philosopher', 'titulares', 'h1', 'google fonts'],
      spec: 'Google Fonts · Pesos Regular 400 y Bold 700',
    },
    {
      id: 'font-dmsans',
      name: 'DM Sans',
      category: 'fuentes',
      categoryLabel: 'Tipografías',
      subtitle: 'Lectura, interfaz web, tablas de horarios y app',
      tags: ['fuente', 'tipografia', 'dm sans', 'lectura', 'web', 'horarios', 'sans'],
      spec: 'Google Fonts · Claridad geométrica hiper-legible',
    },
  ];

  const illustrationItems = [
    {
      id: 'ill-quietud',
      name: 'Presencia Consciente (Quietud)',
      category: 'ilustraciones',
      categoryLabel: 'Ilustraciones',
      subtitle: 'Ilustración oficial del manual en trazo Índigo (2Recurso_4.svg)',
      tags: ['ilustracion', 'dibujo', 'quietud', 'presencia', 'meditacion', 'yoga', 'eje'],
      action: downloadMeditationIllustration,
      illustrationName: 'quietud' as const,
    },
    {
      id: 'ill-equilibrio',
      name: 'Control & Equilibrio (Natarajasana)',
      category: 'ilustraciones',
      categoryLabel: 'Ilustraciones',
      subtitle: 'Ilustración oficial del manual en trazo Índigo (2Recurso_5.svg)',
      tags: ['ilustracion', 'equilibrio', 'movilidad', 'control', 'asana', 'natarajasana', 'bailarin'],
      action: downloadEquilibrioIllustration,
      illustrationName: 'equilibrio' as const,
    },
    {
      id: 'ill-extension',
      name: 'Amplitud & Extensión (Apertura)',
      category: 'ilustraciones',
      categoryLabel: 'Ilustraciones',
      subtitle: 'Ilustración oficial del manual en trazo Índigo (2Recurso_6.svg)',
      tags: ['ilustracion', 'extension', 'flexibilidad', 'amplitud', 'arcos', 'dorsal', 'apertura'],
      action: downloadExtensionIllustration,
      illustrationName: 'extension' as const,
    },
    {
      id: 'ill-gatito',
      name: 'Desperezo Matutino (Gatito)',
      category: 'ilustraciones',
      categoryLabel: 'Ilustraciones',
      subtitle: 'Ilustración oficial del manual en trazo Índigo (2Recurso_7.svg)',
      tags: ['ilustracion', 'gatito', 'desperezo', 'estiramiento', 'calma', 'gato', 'felino', 'instintivo'],
      action: downloadGatitoIllustration,
      illustrationName: 'gatito' as const,
    },
    {
      id: 'ill-comunidad',
      name: 'Comunidad Online (En Casa)',
      category: 'ilustraciones',
      categoryLabel: 'Ilustraciones',
      subtitle: 'Ilustración oficial del manual en trazo Índigo (2Recurso_8.svg)',
      tags: ['ilustracion', 'comunidad', 'online', 'casa', 'perro boca abajo', 'zoom', 'esterilla'],
      action: downloadComunidadIllustration,
      illustrationName: 'comunidad' as const,
    },
  ];

  const colorItems = [
    {
      id: 'color-marfil',
      name: 'Marfil',
      hex: '#F5F2E6',
      role: '34% Lienzo / Luz',
      category: 'colores',
      categoryLabel: 'Paleta',
      tags: ['color', 'marfil', 'lienzo', 'fondo', 'blanco', 'luz', '#f5f2e6'],
    },
    {
      id: 'color-indigo',
      name: 'Índigo',
      hex: '#223189',
      role: '24% Guía / Enfoque',
      category: 'colores',
      categoryLabel: 'Paleta',
      tags: ['color', 'indigo', 'azul', 'guia', 'enfoque', '#223189'],
    },
    {
      id: 'color-oliva',
      name: 'Oliva',
      hex: '#676E56',
      role: '16% Orgánico / Tierra',
      category: 'colores',
      categoryLabel: 'Paleta',
      tags: ['color', 'oliva', 'verde', 'organico', 'tierra', '#676e56'],
    },
    {
      id: 'color-cacao',
      name: 'Cacao',
      hex: '#231C16',
      role: '14% Texto / Raíz',
      category: 'colores',
      categoryLabel: 'Paleta',
      tags: ['color', 'cacao', 'negro', 'cafe', 'texto', 'raiz', 'nocturna', '#231c16'],
    },
    {
      id: 'color-cielo',
      name: 'Cielo',
      hex: '#7398C1',
      role: '12% Brillo / Aire',
      category: 'colores',
      categoryLabel: 'Paleta',
      tags: ['color', 'cielo', 'azul claro', 'brillo', 'aire', '#7398c1'],
    },
  ];

  const photoItems = [
    {
      id: 'photo-adho-mukha',
      name: 'Adho Mukha Svanasana',
      category: 'fotografias',
      categoryLabel: 'Fotografía',
      subtitle: 'Perro boca abajo · Elongación y arraigo posterior',
      src: '/assets/aistudio/9af3149bfcccd796159f25bbb5097d4b_97042f37.jpg',
      tags: ['foto', 'fotografia', 'perro boca abajo', 'adho mukha', 'movilidad', 'esterilla', 'campana'],
    },
    {
      id: 'photo-torsion',
      name: 'Torsión & Presencia Táctil',
      category: 'fotografias',
      categoryLabel: 'Fotografía',
      subtitle: 'Conexión costal sobre textura pétrea y luz solar',
      src: '/assets/aistudio/d248055fa6edc5267d0a372a73fbc432_797cff6a.jpg',
      tags: ['foto', 'fotografia', 'torsion', 'tactil', 'costillas', 'luz', 'sol', 'campana'],
    },
    {
      id: 'photo-balasana',
      name: 'Balasana (Postura del Niño)',
      category: 'fotografias',
      categoryLabel: 'Fotografía',
      subtitle: 'Rendición a la gravedad y pausa reparadora',
      src: '/assets/aistudio/f0276d69c888ea190fbf51f614c2751d_55af7769.jpg',
      tags: ['foto', 'fotografia', 'balasana', 'nino', 'descanso', 'quietud', 'campana'],
    },
    {
      id: 'photo-gyan-mudra',
      name: 'Gyan Mudra en Luz Natural',
      category: 'fotografias',
      categoryLabel: 'Fotografía',
      subtitle: 'Meditación matutina y claridad mental sobre lino',
      src: '/assets/aistudio/d9adeebd97c9b87ca14cedad79e457e7_46a30507.jpg',
      tags: ['foto', 'fotografia', 'gyan mudra', 'meditacion', 'luz natural', 'lino', 'campana'],
    },
    {
      id: 'photo-chin-mudra',
      name: 'Chin Mudra · Estudio Minimalista',
      category: 'fotografias',
      categoryLabel: 'Fotografía',
      subtitle: 'Blanco y negro escultórico en medio loto',
      src: '/assets/aistudio/2ae7a4e2bb5f9c1bf032fe68d0b16bd5_c6e60589.jpg',
      tags: ['foto', 'fotografia', 'chin mudra', 'estudio', 'monocromo', 'blanco y negro', 'campana'],
    },
  ];

  // Filtering logic
  const query = searchQuery.trim().toLowerCase();

  const filteredLogos = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'logos') return [];
    if (!query) return logoItems;
    return logoItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.tags.some((t) => t.includes(query))
    );
  }, [query, selectedCategory]);

  const filteredFonts = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'fuentes') return [];
    if (!query) return fontItems;
    return fontItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.tags.some((t) => t.includes(query))
    );
  }, [query, selectedCategory]);

  const filteredIllustrations = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'ilustraciones') return [];
    if (!query) return illustrationItems;
    return illustrationItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.tags.some((t) => t.includes(query))
    );
  }, [query, selectedCategory]);

  const filteredColors = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'colores') return [];
    if (!query) return colorItems;
    return colorItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.hex.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query) ||
        item.tags.some((t) => t.includes(query))
    );
  }, [query, selectedCategory]);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'fotografias') return [];
    if (!query) return photoItems;
    return photoItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.tags.some((t) => t.includes(query))
    );
  }, [query, selectedCategory]);

  const totalResultsCount =
    filteredLogos.length +
    filteredFonts.length +
    filteredIllustrations.length +
    filteredPhotos.length +
    filteredColors.length;

  // State for interactive live preview stage
  const [previewVariant, setPreviewVariant] = useState<'full' | 'isotipo' | 'wordmark'>('full');
  const [previewFormat, setPreviewFormat] = useState<'svg' | 'png' | 'jpg'>('svg');
  const [previewWithBg, setPreviewWithBg] = useState<boolean>(false);
  const [previewBgColor, setPreviewBgColor] = useState<string>('#F5F2E6');
  const [previewLogoColor, setPreviewLogoColor] = useState<string>('#223189');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Background color options for live preview
  const bgPalette = [
    { label: 'Marfil', hex: '#F5F2E6', textDark: true, defaultLogo: '#223189' },
    { label: 'Índigo', hex: '#223189', textDark: false, defaultLogo: '#F5F2E6' },
    { label: 'Oliva', hex: '#676E56', textDark: false, defaultLogo: '#F5F2E6' },
    { label: 'Cacao', hex: '#231C16', textDark: false, defaultLogo: '#F5F2E6' },
    { label: 'Cielo', hex: '#7398C1', textDark: true, defaultLogo: '#223189' },
  ];

  // Auto-contrast logo color when background changes
  const handleSelectBgColor = (colorHex: string, defaultLogo: string) => {
    setPreviewBgColor(colorHex);
    setPreviewLogoColor(defaultLogo);
  };

  const handleFormatChange = (fmt: 'svg' | 'png' | 'jpg') => {
    setPreviewFormat(fmt);
    if (fmt === 'jpg' && !previewWithBg) {
      setPreviewWithBg(true);
      onShowToast('El formato JPG no admite transparencia; fondo activado automáticamente');
    }
  };

  const handleDownloadPreview = () => {
    const bgStatus = previewWithBg ? 'con-fondo' : 'sin-fondo';
    const filename = `mantra-${previewVariant}-${bgStatus}.${previewFormat}`;

    if (previewFormat === 'svg') {
      const svgStr = generateLogoSvgString(
        previewVariant,
        previewLogoColor,
        previewWithBg,
        previewBgColor
      );
      downloadSvgFile(filename, svgStr);
      onShowToast(`Archivo ${filename} descargado exitosamente`);
    } else {
      setIsExporting(true);
      exportLogoRaster(
        previewVariant,
        previewLogoColor,
        previewFormat,
        previewWithBg,
        previewBgColor,
        filename,
        () => {
          setIsExporting(false);
          onShowToast(`Archivo ${filename} generado en alta resolución`);
        }
      );
    }
  };

  if (!isOpen) return null;

  // Section: Logos
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F5F2E6] text-[#231C16] w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl border border-[#231C16]/15 overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-4 sm:px-8 py-3.5 sm:py-5 border-b border-[#231C16]/10 flex items-center justify-between gap-3 bg-white/60">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#223189] font-semibold block">
              Centro de Recursos Oficiales
            </span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-[#231C16]">
              Brand Asset Kit · Mantra
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadAllKit}
              disabled={isZipping}
              className="px-3 sm:px-4 py-2 rounded-xl bg-[#223189] hover:bg-[#1a2569] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors disabled:opacity-60"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Generando ZIP...' : 'Descargar todo el set (ZIP)'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#231C16]/60 hover:text-[#231C16] hover:bg-black/5 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Search & Filter Controls Bar */}
        <div className="px-4 sm:px-8 py-3 sm:py-3.5 bg-white/40 border-b border-[#231C16]/8 space-y-2.5 sm:space-y-3">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#223189] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar recursos (ej. logo, nearo, quietud, índigo, marfil)..."
              className="w-full pl-10 pr-9 py-2 sm:py-2.5 rounded-xl border border-[#231C16]/15 bg-white text-xs sm:text-sm text-[#231C16] placeholder:text-[#231C16]/45 focus:outline-none focus:ring-2 focus:ring-[#223189]/20 focus:border-[#223189] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded-md text-[#231C16]/40 hover:text-[#231C16] transition-colors"
                title="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            {(
              [
                { id: 'all', label: 'Todos' },
                { id: 'logos', label: 'Logos' },
                { id: 'fuentes', label: 'Fuentes' },
                { id: 'ilustraciones', label: 'Ilustraciones' },
                { id: 'fotografias', label: 'Fotografías' },
                { id: 'colores', label: 'Colores' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors text-[11px] sm:text-xs ${
                  selectedCategory === cat.id
                    ? 'bg-[#223189] text-white shadow-xs'
                    : 'bg-white/60 text-[#231C16]/70 hover:bg-white hover:text-[#231C16]'
                }`}
              >
                {cat.label}
              </button>
            ))}

            <span className="ml-auto text-[11px] text-[#231C16]/50 whitespace-nowrap hidden sm:inline">
              {totalResultsCount} recurso{totalResultsCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Modal Body with Filtered Results */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          {/* Real-Time Logo Preview Stage (visible when viewing all or logos) */}
          {(selectedCategory === 'all' || selectedCategory === 'logos') && !searchQuery && (
            <div className="bg-white rounded-2xl border border-[#231C16]/12 overflow-hidden shadow-xs">
              <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-[#231C16]/10 flex flex-wrap items-center justify-between gap-2 bg-[#FAF8F2]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#223189] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#231C16]">
                    Previsualizador en Tiempo Real
                  </span>
                  <span className="text-[10px] font-mono text-[#231C16]/50 hidden xs:inline">
                    · {previewFormat.toUpperCase()} · {previewWithBg ? 'Con Fondo' : 'Sin Fondo'}
                  </span>
                </div>

                {/* Variant selector */}
                <div className="flex items-center gap-1 bg-[#231C16]/5 p-0.5 rounded-lg text-[11px]">
                  <button
                    onClick={() => setPreviewVariant('full')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      previewVariant === 'full'
                        ? 'bg-white text-[#223189] shadow-xs'
                        : 'text-[#231C16]/70 hover:text-[#231C16]'
                    }`}
                  >
                    Completo
                  </button>
                  <button
                    onClick={() => setPreviewVariant('isotipo')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      previewVariant === 'isotipo'
                        ? 'bg-white text-[#223189] shadow-xs'
                        : 'text-[#231C16]/70 hover:text-[#231C16]'
                    }`}
                  >
                    Isotipo Zen
                  </button>
                  <button
                    onClick={() => setPreviewVariant('wordmark')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      previewVariant === 'wordmark'
                        ? 'bg-white text-[#223189] shadow-xs'
                        : 'text-[#231C16]/70 hover:text-[#231C16]'
                    }`}
                  >
                    Wordmark
                  </button>
                </div>
              </div>

              {/* The Live Interactive Canvas */}
              <div
                className="relative min-h-[190px] sm:min-h-[250px] flex items-center justify-center p-4 sm:p-8 transition-colors duration-300 overflow-hidden"
                style={
                  previewWithBg
                    ? { backgroundColor: previewBgColor }
                    : {
                        backgroundImage:
                          'repeating-conic-gradient(#e5e7eb 0% 25%, #ffffff 0% 50%)',
                        backgroundSize: '16px 16px',
                      }
                }
              >
                {/* Transparency watermark indicator if no background */}
                {!previewWithBg && (
                  <span className="absolute top-2.5 left-3 sm:top-3 sm:left-4 text-[9px] font-mono uppercase tracking-widest text-black/40 select-none bg-white/80 px-2 py-0.5 rounded backdrop-blur-xs">
                    Cuadrícula de Transparencia (Sin fondo)
                  </span>
                )}

                {/* Render the actual vector logo */}
                <div className="transform transition-transform hover:scale-105 duration-200 max-w-full px-2">
                  <BrandLogo
                    variant={previewVariant}
                    color={previewLogoColor}
                    size={previewVariant === 'isotipo' ? 180 : 320}
                  />
                </div>
              </div>

              {/* Live Preview Toolbar & Controls */}
              <div className="p-3 sm:p-4 bg-white border-t border-[#231C16]/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs">
                {/* Left controls: Format & Background */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {/* Format Pills */}
                  <div className="flex items-center gap-1 bg-[#F5F2E6] p-1 rounded-xl">
                    {(['svg', 'png', 'jpg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => handleFormatChange(fmt)}
                        className={`px-2.5 sm:px-3 py-1 rounded-lg font-mono font-bold text-[10px] sm:text-[11px] uppercase transition-all ${
                          previewFormat === fmt
                            ? 'bg-[#223189] text-white shadow-xs'
                            : 'text-[#231C16]/70 hover:text-[#231C16]'
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>

                  {/* Background Toggle */}
                  <div className="flex items-center gap-1 bg-[#F5F2E6] p-1 rounded-xl">
                    <button
                      onClick={() => {
                        if (previewFormat === 'jpg') {
                          onShowToast('JPG no admite transparencia. Selecciona SVG o PNG para Sin Fondo');
                          return;
                        }
                        setPreviewWithBg(false);
                      }}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium text-[10px] sm:text-[11px] transition-all ${
                        !previewWithBg
                          ? 'bg-[#223189] text-white shadow-xs'
                          : 'text-[#231C16]/70 hover:text-[#231C16]'
                      }`}
                    >
                      Sin Fondo
                    </button>
                    <button
                      onClick={() => setPreviewWithBg(true)}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium text-[10px] sm:text-[11px] transition-all ${
                        previewWithBg
                          ? 'bg-[#223189] text-white shadow-xs'
                          : 'text-[#231C16]/70 hover:text-[#231C16]'
                      }`}
                    >
                      Con Fondo
                    </button>
                  </div>

                  {/* Color Selector (when Con Fondo is selected) */}
                  {previewWithBg && (
                    <div className="flex items-center gap-1.5 pl-1">
                      <span className="text-[10px] text-[#231C16]/60 font-medium">Lienzo:</span>
                      {bgPalette.map((bg) => (
                        <button
                          key={bg.hex}
                          onClick={() => handleSelectBgColor(bg.hex, bg.defaultLogo)}
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all ${
                            previewBgColor === bg.hex
                              ? 'ring-2 ring-[#223189] scale-110 shadow-xs'
                              : 'border-black/20 hover:scale-105'
                          }`}
                          style={{ backgroundColor: bg.hex }}
                          title={`Fondo ${bg.label} (${bg.hex})`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Logo color toggle (All 5 palette colors) */}
                  <div className="flex items-center gap-1.5 pl-1">
                    <span className="text-[10px] text-[#231C16]/60 font-medium">Tinta:</span>
                    {[
                      { label: 'Índigo', hex: '#223189' },
                      { label: 'Marfil', hex: '#F5F2E6' },
                      { label: 'Oliva', hex: '#676E56' },
                      { label: 'Cacao', hex: '#231C16' },
                      { label: 'Cielo', hex: '#7398C1' },
                    ].map((ink) => (
                      <button
                        key={ink.hex}
                        onClick={() => setPreviewLogoColor(ink.hex)}
                        className={`w-5 h-5 rounded-full border border-black/25 transition-all ${
                          previewLogoColor === ink.hex
                            ? 'ring-2 ring-[#223189] scale-110'
                            : 'opacity-75 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: ink.hex }}
                        title={`Tinta ${ink.label} (${ink.hex})`}
                      />
                    ))}
                  </div>
                </div>

                {/* Direct Download Button */}
                <button
                  onClick={handleDownloadPreview}
                  disabled={isExporting}
                  className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-[#223189] hover:bg-[#1a2569] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>
                    {isExporting
                      ? 'Exportando...'
                      : `Descargar ${previewFormat.toUpperCase()} (${previewWithBg ? 'Con Fondo' : 'Sin Fondo'})`}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Empty Search State */}
          {totalResultsCount === 0 && (
            <div className="py-14 text-center">
              <Search className="w-8 h-8 text-[#231C16]/30 mx-auto mb-3" />
              <h4 className="font-display text-lg text-[#231C16] font-semibold">
                No se encontraron recursos
              </h4>
              <p className="text-xs text-[#231C16]/60 mt-1 max-w-sm mx-auto">
                No hay resultados para "{searchQuery}". Prueba con términos como <em>logo</em>, <em>nearo</em>, <em>quietud</em> o <em>cacao</em>.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#223189] text-white text-xs font-semibold hover:bg-[#1a2569] transition-colors"
              >
                Restablecer búsqueda
              </button>
            </div>
          )}

          {/* Section: Logos */}
          {filteredLogos.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#223189]" />
                  <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#231C16]">
                    Archivos Directos ({filteredLogos.length})
                  </h4>
                </div>
                <button
                  onClick={downloadAllKit}
                  disabled={isZipping}
                  className="px-3.5 py-2 rounded-xl bg-[#223189] hover:bg-[#1a2569] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors disabled:opacity-60"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isZipping ? zipProgress || 'Generando ZIP...' : 'Descargar todo el set (ZIP)'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredLogos.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border flex items-center justify-between transition-shadow hover:shadow-xs ${
                      item.id === 'logo-negativo'
                        ? 'bg-[#223189] text-white border-transparent'
                        : item.id === 'logo-master'
                        ? 'bg-[#676E56]/15 border-[#676E56]/30 text-[#231C16]'
                        : 'bg-white border-[#231C16]/10 text-[#231C16]'
                    }`}
                  >
                    <div className="pr-3">
                      <div className="font-semibold text-xs leading-snug">{item.name}</div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          item.id === 'logo-negativo' ? 'text-white/70' : 'text-[#231C16]/55'
                        }`}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.type === 'logo' && (
                        <button
                          onClick={() => {
                            if (item.id === 'logo-principal') {
                              setPreviewVariant('full');
                              setPreviewLogoColor('#223189');
                            } else if (item.id === 'logo-negativo') {
                              setPreviewVariant('full');
                              setPreviewLogoColor('#F5F2E6');
                              setPreviewWithBg(true);
                              setPreviewBgColor('#223189');
                            } else if (item.id === 'logo-isotipo') {
                              setPreviewVariant('isotipo');
                              setPreviewLogoColor('#223189');
                            } else if (item.id === 'logo-wordmark') {
                              setPreviewVariant('wordmark');
                              setPreviewLogoColor('#223189');
                            }
                            onShowToast(`Cargado en el previsualizador: ${item.name}`);
                          }}
                          className={`px-2 py-1 rounded-md text-[10px] font-medium border transition-colors ${
                            item.id === 'logo-negativo'
                              ? 'border-white/30 text-white/80 hover:text-white hover:bg-white/10'
                              : 'border-[#231C16]/15 text-[#231C16]/70 hover:text-[#231C16] hover:bg-black/5'
                          }`}
                          title="Cargar en el previsualizador"
                        >
                          Ver
                        </button>
                      )}
                      <button
                        onClick={item.action}
                        className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                          item.id === 'logo-negativo'
                            ? 'bg-white/20 hover:bg-white text-white hover:text-[#223189]'
                            : 'bg-[#F5F2E6] hover:bg-[#223189] hover:text-white text-[#223189]'
                        }`}
                        title={`Descargar ${item.name}`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Ilustraciones */}
          {filteredIllustrations.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Feather className="w-4 h-4 text-[#223189]" />
                <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#231C16]">
                  Ilustraciones de Calma & Movimiento ({filteredIllustrations.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredIllustrations.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white border border-[#231C16]/10 flex items-center justify-between hover:shadow-xs transition-shadow"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <div className="w-11 h-11 rounded-lg bg-[#F5F2E6] flex items-center justify-center shrink-0 border border-[#231C16]/8">
                        <BrandIllustration
                          name={item.illustrationName}
                          color="#223189"
                          size={32}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-[#231C16] leading-snug">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#231C16]/55 mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {item.action && (
                      <button
                        onClick={item.action}
                        className="p-2.5 rounded-lg bg-[#F5F2E6] hover:bg-[#223189] hover:text-white transition-colors text-[#223189] shrink-0"
                        title="Descargar SVG Oficial"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Fotografías */}
          {filteredPhotos.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-4 h-4 text-[#223189]" />
                <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#231C16]">
                  Fotografía Editorial de Campaña ({filteredPhotos.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredPhotos.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-white border border-[#231C16]/10 flex items-center justify-between hover:shadow-xs transition-shadow gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-14 h-14 rounded-lg bg-[#231C16] overflow-hidden shrink-0 border border-[#231C16]/10">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-semibold text-xs text-[#231C16] leading-snug truncate">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#231C16]/55 mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </div>
                        <span className="text-[9px] font-mono text-[#676E56] uppercase tracking-wider">
                          Alta Resolución JPG
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.src}
                      download={`mantra-foto-${item.id}.jpg`}
                      className="p-2.5 rounded-lg bg-[#F5F2E6] hover:bg-[#223189] hover:text-white transition-colors text-[#223189] shrink-0"
                      title={`Descargar ${item.name}`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Fuentes */}
          {filteredFonts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Type className="w-4 h-4 text-[#223189]" />
                <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#231C16]">
                  Tipografías del Sistema ({filteredFonts.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {filteredFonts.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white border border-[#231C16]/10 flex flex-col justify-between hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-xs text-[#223189] font-mono">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-[#231C16]/40 uppercase tracking-widest font-mono">
                          Fuente
                        </span>
                      </div>
                      <div className="text-[11px] text-[#231C16]/80 leading-relaxed mb-2 font-medium">
                        {item.subtitle}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#231C16]/8 text-[10px] text-[#231C16]/50">
                      {item.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Colores */}
          {filteredColors.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-4 h-4 text-[#223189]" />
                <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#231C16]">
                  Colores & Códigos HEX ({filteredColors.length})
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {filteredColors.map((clr) => (
                  <button
                    key={clr.hex}
                    onClick={() => copyColor(clr.hex, clr.name)}
                    className="p-3 rounded-xl bg-white border border-[#231C16]/10 text-left hover:border-[#223189] transition-all group"
                  >
                    <span
                      className="w-full h-8 rounded-lg mb-2 block border border-black/10"
                      style={{ backgroundColor: clr.hex }}
                    />
                    <div className="font-semibold text-xs text-[#231C16]">{clr.name}</div>
                    <div className="text-[10px] font-mono text-[#223189] flex items-center justify-between">
                      <span>{clr.hex}</span>
                      <Copy className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
                    </div>
                    <div className="text-[9px] text-[#231C16]/50 mt-0.5">{clr.role}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-8 py-3 sm:py-4 border-t border-[#231C16]/10 bg-white/50 flex flex-wrap items-center justify-between gap-2 text-xs text-[#231C16]/60">
          <span className="truncate pr-2">Manual de Identidad Visual · Mantra 2026</span>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadAllKit}
              disabled={isZipping}
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#223189] text-white font-semibold hover:bg-[#1a2569] transition-colors flex items-center gap-1.5 disabled:opacity-60"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Generando ZIP...' : 'Descargar todo el set (ZIP)'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#231C16] text-[#F5F2E6] font-medium hover:bg-black transition-colors shrink-0"
            >
              Listo / Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
