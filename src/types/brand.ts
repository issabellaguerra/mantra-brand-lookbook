export interface BrandColor {
  id: string;
  name: string;
  role: string;
  category: string;
  percentage: number;
  hex: string;
  rgb: string;
  cmyk: string;
  contrastText: string;
  description: string;
}

export interface BrandIllustration {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  category: string;
  tagline: string;
  description: string;
}

export type LogoVariant = 'full' | 'isotipo' | 'wordmark';
export type SurfaceMode = 'marfil' | 'indigo' | 'cacao' | 'oliva' | 'cielo';

export interface AnatomyPoint {
  id: 'foco' | 'astas' | 'infinito';
  name: string;
  symbol: string;
  tag: string;
  description: string;
  detail: string;
}
