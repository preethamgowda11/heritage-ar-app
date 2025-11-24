export interface Site {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
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
  title: string;
  description: string;
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
}
