'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Artifact } from '@/types';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { ModelViewer } from '@/components/common/ModelViewer';
import { useTranslation } from '@/hooks/use-translation';

interface ArtifactDetailViewProps {
  artifact: Artifact;
}

export function ArtifactDetailView({ artifact }: ArtifactDetailViewProps) {
  const { isLowBandwidth } = useUserPreferences();
  const { t, language } = useTranslation();

  const title = artifact.title[language];
  const description = artifact.description[language];
  
  // In low bandwidth mode, we don't show the model.
  const modelUrl = isLowBandwidth ? null : artifact.modelFileUrl;

  const handleReadDescription = () => {
    // TTS integration will be added here.
    console.log('Reading description:', description);
  };

  return (
    <div className="container max-w-4xl mx-auto p-4 md:p-8">
      <div className="detail-page-controls mb-6 flex justify-between items-center gap-2">
        <Button asChild variant="outline" size="sm">
            <Link href="/artifacts"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_artifacts')}</Link>
        </Button>
        <Button id="read-description-btn" variant="outline" size="sm" onClick={handleReadDescription} aria-label={t('read_description_aloud')}>
          <Volume2 className="mr-2 h-4 w-4" /> {t('read_description_aloud')}
        </Button>
      </div>

      <div className="mb-8">
        {modelUrl ? (
          <ModelViewer src={modelUrl} alt={`3D model of ${title}`} posterId={artifact.imageUrlId} ar />
        ) : (
          <p className="text-center p-8 bg-muted rounded-lg">3D Model not available in low bandwidth mode.</p>
        )}
      </div>

      <header className="mb-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{title}</h1>
      </header>
      
      <article className="prose prose-lg max-w-none mx-auto text-foreground/90 mb-6">
        <p className="detail-description">{description}</p>
      </article>
    </div>
  );
}
