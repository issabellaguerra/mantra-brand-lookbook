import React from 'react';
import { LogoVariant } from '../../types/brand';

interface BrandLogoProps {
  variant?: LogoVariant;
  color?: string;
  accentColor?: string;
  size?: number | string;
  className?: string;
  showAnatomyPins?: boolean;
  activeAnatomyPin?: string | null;
  onHoverPin?: (pin: 'foco' | 'astas' | 'infinito' | null) => void;
}

// Master vector paths extracted directly from the user's Mantra_logo_ee29c0a0.svg file
export const LOGO_PATHS = {
  // Letters: M, a, n, t, r, a (from top-left master coordinate space)
  M: 'M111.6,183.61c-4.1,0-6.95-2.96-8.55-8.89l-14.13-49.36c-.38-1.52-1.1-2.28-2.17-2.28s-1.71.76-1.94,2.28l-11.51,64.86c-.15.76-.53,1.14-1.14,1.14-.84,0-1.18-.49-1.03-1.48l11.97-67.25c.53-3.11,1.56-5.51,3.08-7.18,1.52-1.67,3.38-2.51,5.59-2.51,4.56,0,7.79,3.23,9.69,9.69l13.68,47.99c.38,1.52,1.06,2.28,2.05,2.28.91,0,1.6-.76,2.05-2.28l13.68-47.99c1.9-6.46,5.05-9.69,9.46-9.69,2.28,0,4.16.82,5.64,2.45,1.48,1.63,2.49,4.01,3.02,7.12l10.83,61.44c.38,2.05-.04,3.8-1.25,5.24-1.22,1.44-2.93,2.16-5.13,2.16-1.6,0-2.96-.47-4.1-1.42-1.14-.95-1.82-2.22-2.05-3.82l-10.72-60.76c-.38-1.52-1.07-2.28-2.05-2.28s-1.71.76-2.16,2.28l-14.02,49.36c-1.75,5.93-4.67,8.89-8.78,8.89Z',
  a1: 'M173.27,163.09c0-4.18.7-8.02,2.11-11.51,1.4-3.49,3.36-6.5,5.87-9,2.51-2.51,5.51-4.46,9.01-5.87,3.49-1.4,7.33-2.11,11.51-2.11s7.85.7,11.23,2.11c3.38,1.41,6.27,3.4,8.66,5.98,2.39,2.58,4.25,5.7,5.59,9.35,1.33,3.65,1.99,7.71,1.99,12.2v20.97c0,1.82-.57,3.31-1.71,4.45-1.14,1.14-2.66,1.71-4.56,1.71s-3.31-.57-4.45-1.71c-1.14-1.14-1.71-2.62-1.71-4.45v-2.16c-3.72,5.7-9.12,8.55-16.19,8.55-3.87,0-7.47-.74-10.77-2.22-3.31-1.48-6.19-3.49-8.66-6.04-2.47-2.55-4.41-5.56-5.81-9.06-1.41-3.49-2.11-7.22-2.11-11.17ZM186.72,163.09c0,3.95.36,7.56,1.08,10.83.72,3.27,1.75,6.06,3.08,8.38,1.33,2.32,2.91,4.1,4.73,5.36,1.82,1.25,3.88,1.88,6.16,1.88s4.35-.63,6.21-1.88c1.86-1.25,3.46-3.04,4.79-5.36,1.33-2.32,2.35-5.11,3.08-8.38.72-3.27,1.08-6.88,1.08-10.83s-.36-7.69-1.08-11c-.72-3.31-1.75-6.12-3.08-8.43-1.33-2.32-2.93-4.1-4.79-5.36-1.86-1.25-3.93-1.88-6.21-1.88s-4.33.63-6.16,1.88c-1.82,1.25-3.4,3.04-4.73,5.36-1.33,2.32-2.36,5.13-3.08,8.43-.72,3.31-1.08,6.97-1.08,11Z',
  n: 'M268.22,134.6c3.8,0,7.27.63,10.43,1.88,3.15,1.25,5.85,3,8.09,5.24,2.24,2.24,3.97,4.94,5.19,8.09,1.21,3.15,1.82,6.67,1.82,10.54v24.85c0,1.82-.57,3.29-1.71,4.39-1.14,1.1-2.62,1.65-4.45,1.65s-3.31-.55-4.45-1.65c-1.14-1.1-1.71-2.56-1.71-4.39v-31.23c0-5.32-1.2-9.57-3.59-12.77-2.39-3.19-5.61-4.79-9.63-4.79s-7.24,1.6-9.63,4.79c-2.39,3.19-3.59,7.45-3.59,12.77v31.23c0,1.82-.57,3.29-1.71,4.39-1.14,1.1-2.62,1.65-4.45,1.65s-3.31-.55-4.45-1.65c-1.14-1.1-1.71-2.56-1.71-4.39v-24.85c0-3.87.61-7.39,1.82-10.54,1.21-3.15,2.94-5.85,5.19-8.09s4.94-3.99,8.09-5.24c3.15-1.25,6.63-1.88,10.43-1.88Z',
  t: 'M331.25,136.65c0,.61-.34.91-1.03.91h-10.26v37.16c0,4.86,1.06,8.59,3.19,11.17,2.13,2.58,5.2,3.88,9.23,3.88h.23c.61,0,.91.3.91.91s-.3.91-.91.91h-2.28c-7.37,0-13.01-2-16.93-5.98-3.91-3.99-5.83-9.75-5.76-17.27v-38.3c0-1.9.55-3.4,1.65-4.5s2.6-1.65,4.5-1.65,3.29.55,4.39,1.65c1.1,1.1,1.65,2.6,1.65,4.5l.11,5.7h10.26c.68,0,1.03.3,1.03.91Z',
  r: 'M348.35,191.25c-1.82,0-3.31-.55-4.45-1.65-1.14-1.1-1.71-2.56-1.71-4.39v-25.99c0-3.8.63-7.2,1.88-10.2,1.25-3,3.02-5.58,5.3-7.75,2.28-2.17,5.05-3.82,8.32-4.96,3.27-1.14,6.88-1.71,10.83-1.71h.57c.61,0,.91.3.91.91s-.3.91-.91.91h-.57c-4.26,0-7.66,1.56-10.2,4.67-2.55,3.12-3.82,7.26-3.82,12.42v31.69c0,1.82-.57,3.29-1.71,4.39-1.14,1.1-2.62,1.65-4.44,1.65Z',
  a2: 'M372.39,163.09c0-4.18.7-8.02,2.11-11.51,1.4-3.49,3.36-6.5,5.87-9,2.51-2.51,5.51-4.46,9-5.87,3.49-1.4,7.33-2.11,11.51-2.11s7.85.7,11.23,2.11c3.38,1.41,6.27,3.4,8.66,5.98,2.39,2.58,4.25,5.7,5.58,9.35,1.33,3.65,2,7.71,2,12.2v20.97c0,1.82-.57,3.31-1.71,4.45-1.14,1.14-2.66,1.71-4.56,1.71s-3.31-.57-4.45-1.71-1.71-2.62-1.71-4.45v-2.16c-3.72,5.7-9.12,8.55-16.19,8.55-3.88,0-7.47-.74-10.77-2.22-3.31-1.48-6.19-3.49-8.66-6.04-2.47-2.55-4.41-5.56-5.81-9.06-1.41-3.49-2.11-7.22-2.11-11.17ZM385.85,163.09c0,3.95.36,7.56,1.08,10.83.72,3.27,1.75,6.06,3.08,8.38,1.33,2.32,2.91,4.1,4.73,5.36,1.82,1.25,3.87,1.88,6.16,1.88s4.35-.63,6.21-1.88c1.86-1.25,3.46-3.04,4.79-5.36,1.33-2.32,2.35-5.11,3.08-8.38.72-3.27,1.08-6.88,1.08-10.83s-.36-7.69-1.08-11c-.72-3.31-1.75-6.12-3.08-8.43-1.33-2.32-2.93-4.1-4.79-5.36-1.86-1.25-3.93-1.88-6.21-1.88s-4.33.63-6.16,1.88c-1.82,1.25-3.4,3.04-4.73,5.36-1.33,2.32-2.36,5.13-3.08,8.43-.72,3.31-1.08,6.97-1.08,11Z',
  
  // Concepto Superior: Foco & Mente Serena (Circle)
  circle: 'M284.08,102.93c-.03,9.34-8.15,18.26-17.36,18.52-9.02.26-15.1-6.9-14.3-15.8.71-7.84,7.54-15.24,15.26-16.6,8.76-1.55,16.44,4.94,16.41,13.88ZM276.49,107.39c.03-5.6-4.93-10.42-10.53-10.24-3.8.12-5.94,2.08-6,5.5-.1,5.5,4.4,10.37,9.98,10.39,3.41.02,6.73-1.03,6.55-5.65Z',
  
  // Base en Movimiento: Lazo Infinito
  infinity: 'M309.36,199.39c-3.74-.88-7.91-.59-11.65.46-6.46,1.81-12.24,5.46-18.51,7.85-.62.24-1.29.46-1.94.33-1.41-.3-1.91-1.99-2.83-3.09-1.23-1.47-3.55-1.89-5.22-.94s-2.49,3.16-1.85,4.97c.44,1.23,1.46,2.49.93,3.68-.3.66-.99,1.03-1.64,1.36-10.23,5.09-20.76,10.26-32.14,11.26-8.05.71-12.82-4.07-10.73-12.21.7-2.72,2.03-5.53,4.54-6.77,2.88-1.43,6.34-.37,9.31.89,3.85,1.63,7.57,3.57,11.12,5.78,1.36.85,2.84,1.78,4.44,1.6,2.93-.34,4.1-4.38,2.74-7-1.36-2.61-4.2-4.04-6.86-5.31-3.25-1.55-6.58-3.11-10.16-3.47-4.73-.48-9.54,1.27-13.26,4.23-3.8,3.02-6.62,7.4-7.32,12.21s.85,9.99,4.4,13.31c3.91,3.64,9.7,4.68,14.99,3.96,5.29-.71,10.24-2.96,15.1-5.18,5.96-2.72,11.92-5.45,17.89-8.17.76-.35,1.58-.7,2.4-.54.89.17,1.54.91,2.14,1.58,5.65,6.33,13.21,11.32,21.63,12.3,8.42.98,17.63-2.7,21.76-10.11,3.2-5.74,2.53-14.17-2.08-18.99-1.95-2.04-4.46-3.31-7.18-3.95ZM313.74,219.97c-1,1.68-2.44,3.04-4.33,3.76-2.73,1.03-5.77.87-8.64.34-4.67-.86-9.15-2.66-13.13-5.23-1-.65-5.24-3.02-5.31-4.3-.09-1.63,1.9-2.12,3.26-2.95,2.18-1.32,4.35-2.64,6.6-3.84,2.86-1.52,5.85-2.86,9.03-3.49,5.24-1.05,11.95-.15,13.7,5.74.94,3.16.56,7.05-1.17,9.97Z',

  // Isotipo de Meditación (Zen Seated Human)
  isotypeHead: 'M1091.4,529.77c-.05,13.79-12.04,26.96-25.64,27.35-13.33.38-22.3-10.19-21.12-23.33,1.04-11.58,11.14-22.5,22.53-24.52,12.94-2.29,24.27,7.3,24.23,20.5ZM1080.18,536.36c.05-8.26-7.27-15.39-15.55-15.13-5.62.18-8.77,3.07-8.86,8.13-.15,8.13,6.49,15.31,14.73,15.35,5.04.02,9.94-1.52,9.68-8.35Z',
  isotypeTorso: 'M1067.97,576.54c5.61,0,10.74.93,15.4,2.78,4.66,1.85,8.64,4.43,11.95,7.74,3.31,3.31,5.86,7.29,7.66,11.95,1.79,4.66,2.69,9.85,2.69,15.57v36.69c0,2.69-.84,4.86-2.52,6.48-1.68,1.63-3.87,2.44-6.56,2.44s-4.88-.82-6.56-2.44c-1.68-1.63-2.52-3.79-2.52-6.48v-46.12c0-7.85-1.77-14.14-5.3-18.85-3.53-4.71-8.28-7.07-14.22-7.07s-10.69,2.36-14.22,7.07c-3.53,4.71-5.3,11-5.3,18.85v46.12c0,2.69-.84,4.86-2.52,6.48-1.68,1.63-3.87,2.44-6.56,2.44s-4.88-.82-6.56-2.44c-1.68-1.63-2.52-3.79-2.52-6.48v-36.69c0-5.72.9-10.91,2.69-15.57,1.79-4.66,4.35-8.64,7.66-11.95,3.31-3.31,7.29-5.89,11.95-7.74,4.65-1.85,9.79-2.78,15.4-2.78Z',
  isotypeLegs: 'M1128.72,672.22c-5.53-1.3-11.68-.87-17.2.68-9.54,2.67-18.08,8.07-27.34,11.58-.92.35-1.9.68-2.87.48-2.08-.44-2.83-2.94-4.19-4.57-1.82-2.18-5.24-2.79-7.71-1.39s-3.68,4.67-2.73,7.34c.64,1.82,2.16,3.67,1.37,5.43-.44.98-1.47,1.52-2.43,2-15.1,7.51-30.66,15.15-47.46,16.63-11.89,1.04-18.94-6-15.84-18.02,1.03-4.01,3-8.16,6.71-10,4.26-2.11,9.37-.54,13.74,1.31,5.68,2.41,11.18,5.27,16.41,8.54,2.01,1.26,4.2,2.63,6.55,2.36,4.32-.5,6.05-6.47,4.04-10.33-2.01-3.86-6.2-5.97-10.13-7.84-4.8-2.28-9.71-4.6-15-5.13-6.99-.7-14.08,1.88-19.58,6.24-5.62,4.46-9.77,10.92-10.82,18.02-1.04,7.1,1.25,14.76,6.5,19.65,5.77,5.38,14.32,6.91,22.14,5.85,7.82-1.05,15.12-4.37,22.3-7.65,8.8-4.02,17.61-8.05,26.41-12.07,1.12-.51,2.33-1.04,3.54-.8,1.31.26,2.28,1.34,3.17,2.34,8.34,9.35,19.5,16.72,31.94,18.16,12.44,1.44,26.04-3.99,32.13-14.93,4.72-8.47,3.74-20.93-3.06-28.05-2.88-3.02-6.58-4.88-10.6-5.83ZM1135.19,702.6c-1.47,2.48-3.6,4.5-6.4,5.55-4.03,1.53-8.52,1.28-12.76.5-6.89-1.27-13.52-3.93-19.4-7.73-1.48-.96-7.74-4.46-7.85-6.35-.13-2.4,2.81-3.13,4.82-4.35,3.21-1.95,6.43-3.9,9.75-5.67,4.22-2.25,8.64-4.22,13.33-5.15,7.74-1.54,17.64-.21,20.23,8.48,1.39,4.66.82,10.41-1.73,14.72Z',
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  color = '#223189',
  accentColor = '#7398C1',
  size = 320,
  className = '',
  showAnatomyPins = false,
  activeAnatomyPin = null,
  onHoverPin,
}) => {
  // 1. Isotipo de Meditación (Zen human in padmasana)
  if (variant === 'isotipo') {
    return (
      <svg
        viewBox="990 495 155 235"
        width={typeof size === 'number' ? size * 0.65 : size}
        height={typeof size === 'number' ? size * 0.98 : size}
        className={`max-w-full h-auto transition-all duration-300 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Isotipo de Meditación Mantra"
      >
        <g id="mantra-isotype">
          {/* Head Circle */}
          <path
            d={LOGO_PATHS.isotypeHead}
            fill={activeAnatomyPin === 'foco' ? accentColor : color}
            className="transition-colors duration-300"
          />
          {/* Torso Arch */}
          <path
            d={LOGO_PATHS.isotypeTorso}
            fill={activeAnatomyPin === 'astas' ? accentColor : color}
            className="transition-colors duration-300"
          />
          {/* Infinity Crossed Legs */}
          <path
            d={LOGO_PATHS.isotypeLegs}
            fill={activeAnatomyPin === 'infinito' ? accentColor : color}
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    );
  }

  // 2. Wordmark Puro "Mantra" (Without circle and infinity)
  if (variant === 'wordmark') {
    return (
      <svg
        viewBox="65 100 365 95"
        width={size}
        className={`max-w-full h-auto transition-all duration-300 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Wordmark Mantra en Nearo Rounded"
      >
        <g id="mantra-wordmark-pure" fill={color}>
          <path d={LOGO_PATHS.M} />
          <path d={LOGO_PATHS.a1} />
          <path d={LOGO_PATHS.n} />
          <path d={LOGO_PATHS.t} />
          <path d={LOGO_PATHS.r} />
          <path d={LOGO_PATHS.a2} />
        </g>
      </svg>
    );
  }

  // 3. Logotipo Completo (Circle + Nearo Rounded Wordmark + Infinity Base)
  return (
    <div className={`relative inline-block max-w-full ${className}`}>
      <svg
        viewBox="60 70 375 175"
        width={size}
        className="max-w-full h-auto transition-all duration-300 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logotipo Completo Mantra Oficial"
      >
        <g id="mantra-full-logo-official">
          {/* Concepto Superior: Foco & Mente Serena (Circle) */}
          <g
            id="logo-circle-foco"
            className="cursor-pointer"
            onMouseEnter={() => onHoverPin && onHoverPin('foco')}
            onMouseLeave={() => onHoverPin && onHoverPin(null)}
          >
            <path
              d={LOGO_PATHS.circle}
              fill={activeAnatomyPin === 'foco' ? accentColor : color}
              className="transition-colors duration-300"
            />
          </g>

          {/* Núcleo Gráfico: Mantra en Nearo Rounded */}
          <g
            id="logo-wordmark"
            className="cursor-pointer"
            onMouseEnter={() => onHoverPin && onHoverPin('astas')}
            onMouseLeave={() => onHoverPin && onHoverPin(null)}
            fill={activeAnatomyPin === 'astas' ? accentColor : color}
          >
            <path d={LOGO_PATHS.M} className="transition-colors duration-300" />
            <path d={LOGO_PATHS.a1} className="transition-colors duration-300" />
            <path d={LOGO_PATHS.n} className="transition-colors duration-300" />
            <path d={LOGO_PATHS.t} className="transition-colors duration-300" />
            <path d={LOGO_PATHS.r} className="transition-colors duration-300" />
            <path d={LOGO_PATHS.a2} className="transition-colors duration-300" />
          </g>

          {/* Base en Movimiento: Lazo Infinito */}
          <g
            id="logo-infinity-base"
            className="cursor-pointer"
            onMouseEnter={() => onHoverPin && onHoverPin('infinito')}
            onMouseLeave={() => onHoverPin && onHoverPin(null)}
          >
            <path
              d={LOGO_PATHS.infinity}
              fill={activeAnatomyPin === 'infinito' ? accentColor : color}
              className="transition-colors duration-300"
            />
          </g>
        </g>
      </svg>

      {/* Interactive Anatomy Pin Markers for Section 03 */}
      {showAnatomyPins && (
        <div className="pointer-events-none absolute inset-0">
          {/* Pin 1: Foco */}
          <div
            className={`absolute left-[54%] -translate-x-1/2 top-[12%] flex items-center gap-1.5 transition-all duration-300 ${
              activeAnatomyPin === 'foco' ? 'scale-125 opacity-100' : 'opacity-70'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full border border-current bg-white shadow-sm ring-2 ring-[#7398C1]/50" />
          </div>

          {/* Pin 2: Astas Moduladas */}
          <div
            className={`absolute left-[48%] -translate-x-1/2 top-[52%] flex items-center gap-1.5 transition-all duration-300 ${
              activeAnatomyPin === 'astas' ? 'scale-125 opacity-100' : 'opacity-70'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full border border-current bg-white shadow-sm ring-2 ring-[#7398C1]/50" />
          </div>

          {/* Pin 3: Lazo Infinito */}
          <div
            className={`absolute left-[54%] -translate-x-1/2 top-[84%] flex items-center gap-1.5 transition-all duration-300 ${
              activeAnatomyPin === 'infinito' ? 'scale-125 opacity-100' : 'opacity-70'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full border border-current bg-white shadow-sm ring-2 ring-[#7398C1]/50" />
          </div>
        </div>
      )}
    </div>
  );
};

// Generador de cadenas SVG para descarga directa del cliente
export const generateLogoSvgString = (
  variant: LogoVariant,
  color: string = '#223189',
  withBackground: boolean = false,
  bgColor: string = '#F5F2E6'
): string => {
  if (variant === 'isotipo') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="990 495 155 235" width="310" height="470">
  ${withBackground ? `<rect x="990" y="495" width="155" height="235" fill="${bgColor}" />` : ''}
  <g fill="${color}">
    <path d="${LOGO_PATHS.isotypeHead}" />
    <path d="${LOGO_PATHS.isotypeTorso}" />
    <path d="${LOGO_PATHS.isotypeLegs}" />
  </g>
</svg>`;
  }

  if (variant === 'wordmark') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="65 100 365 95" width="730" height="190">
  ${withBackground ? `<rect x="65" y="100" width="365" height="95" fill="${bgColor}" />` : ''}
  <g fill="${color}">
    <path d="${LOGO_PATHS.M}" />
    <path d="${LOGO_PATHS.a1}" />
    <path d="${LOGO_PATHS.n}" />
    <path d="${LOGO_PATHS.t}" />
    <path d="${LOGO_PATHS.r}" />
    <path d="${LOGO_PATHS.a2}" />
  </g>
</svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="60 70 375 175" width="750" height="350">
  ${withBackground ? `<rect x="60" y="70" width="375" height="175" fill="${bgColor}" />` : ''}
  <g fill="${color}">
    <path d="${LOGO_PATHS.circle}" />
    <path d="${LOGO_PATHS.M}" />
    <path d="${LOGO_PATHS.a1}" />
    <path d="${LOGO_PATHS.n}" />
    <path d="${LOGO_PATHS.t}" />
    <path d="${LOGO_PATHS.r}" />
    <path d="${LOGO_PATHS.a2}" />
    <path d="${LOGO_PATHS.infinity}" />
  </g>
</svg>`;
};

export const downloadSvgFile = (filename: string, svgContent: string) => {
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Exportador de alta resolución a PNG o JPG en el cliente con o sin fondo
export const exportLogoRaster = (
  variant: LogoVariant,
  color: string,
  format: 'png' | 'jpg',
  withBackground: boolean,
  bgColor: string,
  filename: string,
  onComplete?: () => void
) => {
  let width = 2400;
  let height = 1120;
  if (variant === 'isotipo') {
    width = 1600;
    height = 2400;
  } else if (variant === 'wordmark') {
    width = 2400;
    height = 640;
  }

  const svgString = generateLogoSvgString(variant, color, false);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      URL.revokeObjectURL(url);
      return;
    }

    const shouldFillBg = withBackground || format === 'jpg';
    if (shouldFillBg) {
      ctx.fillStyle = withBackground ? bgColor : '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.clearRect(0, 0, width, height);
    }

    ctx.drawImage(img, 0, 0, width, height);
    URL.revokeObjectURL(url);

    const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const quality = format === 'jpg' ? 0.95 : undefined;

    canvas.toBlob(
      (rasterBlob) => {
        if (!rasterBlob) return;
        const rasterUrl = URL.createObjectURL(rasterBlob);
        const link = document.createElement('a');
        link.href = rasterUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(rasterUrl);
        if (onComplete) onComplete();
      },
      mimeType,
      quality
    );
  };

  img.src = url;
};
