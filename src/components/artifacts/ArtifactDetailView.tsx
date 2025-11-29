
'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import type { Artifact } from '@/types';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { optimizeContent, OptimizeContentOutput } from '@/ai/flows/adaptive-content-optimization';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ModelViewer } from '@/components/common/ModelViewer';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { SpeechSynthesisPlayer } from '@/components/common/SpeechSynthesisPlayer';
import { useTranslation } from '@/hooks/use-translation';


interface ArtifactDetailViewProps {
  artifact: Artifact;
  launchAR: boolean;
}

export function ArtifactDetailView({ artifact, launchAR: initialLaunchAR }: ArtifactDetailViewProps) {
  const { isLowBandwidth, isAccessibilityOn, isAudioOn } = useUserPreferences();
  const [optimizedData, setOptimizedData] = useState<OptimizeContentOutput['optimizedArtifactData'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useTranslation();

  const modelIdMap: { [key: string]: string } = {
    'art-1': 'mughal-painting',
    'art-2': 'vijayanagara-coin',
    'art-3': 'iron-pillar',
    'art-4': 'lakshmi-narasimha',
    'art-5': 'harihara',
    'art-6': 'chhau-mask',
    'art-7': 'konark-wheel',
  };
  const modelId = modelIdMap[artifact.id];
  const [launchAR, setLaunchAR] = useState(initialLaunchAR && !!modelId);

  useEffect(() => {
    if (launchAR && modelId) {
        window.location.href = `/ar?id=${modelId}`;
    }
  }, [launchAR, modelId]);


  useEffect(() => {
    if (launchAR) return;

    const processContent = async () => {
      setIsLoading(true);
      const input = {
        artifactData: {
          title: artifact.title[language],
          description: artifact.description[language],
          imageUrl: PlaceHolderImages.find(p => p.id === artifact.imageUrlId)?.imageUrl,
          modelFileUrl: artifact.modelFileUrl,
          fallbackImageUrl: PlaceHolderImages.find(p => p.id === artifact.fallbackImageUrlId)?.imageUrl,
          audioNarrationUrl: artifact.audioNarrationUrl,
        },
        userPreferences: {
          lowBandwidth: isLowBandwidth,
          accessibilityOn: isAccessibilityOn,
          audioOn: isAudioOn,
        },
      };
      const result = await optimizeContent(input);
      setOptimizedData(result.optimizedArtifactData || null);
      setIsLoading(false);
    };

    processContent();
  }, [artifact, isLowBandwidth, isAccessibilityOn, isAudioOn, launchAR, language]);

  if (launchAR) {
      return (
        <div className="container text-center py-20">
          <p>Redirecting to AR experience...</p>
        </div>
      );
  }

  if (isLoading) {
    return <ArtifactDetailSkeleton />;
  }

  if (!optimizedData) {
    return (
      <div className="container text-center py-20">
        <p>Could not load artifact details.</p>
        <Button asChild variant="link" className="mt-4">
            <Link href="/artifacts"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_artifacts')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto p-4 md:p-8">
       <div className="mb-6">
        <Button asChild variant="outline" size="sm">
            <Link href="/artifacts"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_artifacts')}</Link>
        </Button>
      </div>

      <div className="mb-8">
        {optimizedData.modelUrl ? (
          <ModelViewer src={optimizedData.modelUrl} alt={`3D model of ${optimizedData.title}`} posterId={artifact.imageUrlId} />
        ) : (
          <p className="text-center p-8 bg-muted rounded-lg">3D Model not available in low bandwidth mode. Showing fallback image.</p>
        )}
      </div>

      <header className="mb-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{optimizedData.title}</h1>
      </header>
      
      <article className="prose prose-lg max-w-none mx-auto text-foreground/90 mb-6">
        <p>{optimizedData.description}</p>
      </article>

      <div className="my-6">
        <SpeechSynthesisPlayer text={optimizedData.description || ''} />
      </div>

      {optimizedData.audioNarrationUrl && (
        <div className="mt-8">
            <h3 className="text-2xl font-headline mb-4">{t('audio_description')}</h3>
            <Suspense fallback={<Skeleton className="h-20 w-full" />}>
              <AudioPlayer src={optimizedData.audioNarrationUrl} autoPlay={initialLaunchAR || (isAccessibilityOn && isAudioOn)} />
            </Suspense>
        </div>
      )}
    </div>
  );
}

function ArtifactDetailSkeleton() {
  return (
    <div className="container max-w-4xl mx-auto p-4 md:p-8">
      <Skeleton className="h-8 w-40 mb-6" />
      <Skeleton className="w-full aspect-square rounded-lg mb-8" />
      <div className="text-center mb-6">
        <Skeleton className="h-12 w-2/3 mx-auto" />
      </div>
      <div className="space-y-3 max-w-none mx-auto">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
      </div>
    </div>
  )
}
