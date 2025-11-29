export type Language = 'en' | 'hi' | 'kn';

export interface Site {
  id: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  longDescription: Record<Language, string>;
  thumbnailUrlId: string;
  coverImageUrlId: string;
  lowPolyModelUrl: string;
  highPolyModelUrl: string;
  fallback360UrlId: string;
  audioNarrationUrl: string;
  artifacts: Artifact[];
}

export interface Artifact {
  id: string;
  siteId: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  imageUrlId: string;
  modelFileUrl: string;
  fallbackImageUrlId: string;
  audioNarrationUrl: string;
}

export interface UserPreferences {
  isLowBandwidth: boolean;
  isAccessibilityOn: boolean;
  isAudioOn: boolean;
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
  language: Language;
}
