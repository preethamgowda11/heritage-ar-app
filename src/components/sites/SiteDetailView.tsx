'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Site } from '@/types';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { optimizeContent, OptimizeContentOutput } from '@/ai/flows/adaptive-content-optimization';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gem } from 'lucide-react';
import { ModelViewer } from '@/components/common/ModelViewer';
import { AudioPlayer } from '@/components/common/AudioPlayer';

interface SiteDetailViewProps {
  site: Site;
  launchAR: boolean;
}

export function SiteDetailView({ site, launchAR }: SiteDetailViewProps) {
  const { isLowBandwidth, isAccessibilityOn, isAudioOn } = useUserPreferences();
  const [optimizedData, setOptimizedData] = useState<OptimizeContentOutput['optimizedSiteData'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const modelIdMap: { [key: string]: string } = {
    'site-1': 'taj',
    'site-2': 'hampi',
    'site-3': 'qutub',
    'site-4': 'konark',
    'site-5': 'ajanta',
  };
  const modelId = modelIdMap[site.id];

  const [showAR, setShowAR] = useState(launchAR && !!modelId);

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
        siteData: {
          title: site.title,
          shortDescription: site.shortDescription,
          longDescription: site.longDescription,
          thumbnailUrl: PlaceHolderImages.find(p => p.id === site.thumbnailUrlId)?.imageUrl,
          coverImageUrl: PlaceHolderImages.find(p => p.id === site.coverImageUrlId)?.imageUrl,
          lowPolyModelUrl: site.lowPolyModelUrl,
          highPolyModelUrl: site.highPolyModelUrl,
          fallback360Url: PlaceHolderImages.find(p => p.id === site.fallback360UrlId)?.imageUrl,
          audioNarrationUrl: site.audioNarrationUrl,
        },
        userPreferences: {
          lowBandwidth: isLowBandwidth,
          accessibilityOn: isAccessibilityOn,
          audioOn: isAudioOn,
        },
      };
      const result = await optimizeContent(input);
      setOptimizedData(result.optimizedSiteData || null);
      setIsLoading(false);
    };

    processContent();
  }, [site, isLowBandwidth, isAccessibilityOn, isAudioOn, launchAR]);

  const coverImage = optimizedData?.coverImageUrl
    ? {
        url: optimizedData.coverImageUrl,
        hint: PlaceHolderImages.find(p => p.imageUrl === optimizedData.coverImageUrl)?.imageHint || 'heritage site'
      }
    : null;

  if (launchAR) {
      return (
        <div className="container text-center py-20">
          <p>Redirecting to AR experience...</p>
        </div>
      );
  }


  if (isLoading) {
    return <SiteDetailSkeleton />;
  }

  if (!optimizedData) {
    return (
      <div className="container text-center py-20">
        <p>Could not load site details.</p>
        <Button asChild variant="link" className="mt-4">
            <Link href="/sites"><ArrowLeft className="mr-2 h-4 w-4" />Back to Sites</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
            <Link href="/sites"><ArrowLeft className="mr-2 h-4 w-4" />Back to All Sites</Link>
        </Button>
      </div>
      
      {showAR && optimizedData.modelUrl ? (
        <div className="mb-8">
          <ModelViewer src={optimizedData.modelUrl} alt={`3D model of ${optimizedData.title}`} posterId={site.coverImageUrlId} />
          <Button onClick={() => setShowAR(false)} className="mt-4 w-full">Show Details</Button>
        </div>
      ) : (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
          {coverImage ? (
            <Image src={coverImage.url} alt={`Cover image of ${optimizedData.title}`} fill className="object-cover" data-ai-hint={coverImage.hint} />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
      )}

      <header className="mb-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{optimizedData.title}</h1>
      </header>
      
      <article className="prose prose-lg max-w-none mx-auto text-foreground/90">
        <p>{optimizedData.longDescription}</p>
      </article>

      {!showAR && optimizedData.modelUrl && (
        <div className="text-center my-8">
           <Button onClick={() => setShowAR(true)} size="lg">Show 3D Model</Button>
        </div>
      )}
      
      {optimizedData.audioNarrationUrl && (
        <div className="mt-8">
            <h3 className="text-2xl font-headline mb-4">Historical Narration</h3>
            <Suspense fallback={<Skeleton className="h-20 w-full" />}>
              <AudioPlayer src={optimizedData.audioNarrationUrl} autoPlay={isAccessibilityOn && isAudioOn} />
            </Suspense>
        </div>
      )}

      {site.artifacts.length > 0 && (
        <div className="mt-12">
            <h3 className="text-2xl font-headline mb-4 text-center">Related Artifacts</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {site.artifacts.map(artifact => (
                    <Link key={artifact.id} href={`/artifacts/${artifact.id}`} className="group block">
                        <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
                            <CardHeader className="p-0">
                                <div className="relative aspect-square">
                                    <Image 
                                        src={PlaceHolderImages.find(p => p.id === artifact.imageUrlId)?.imageUrl || ''} 
                                        alt={artifact.title}
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-3">
                                <p className="text-sm font-semibold truncate">{artifact.title}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
             </div>
        </div>
      )}
    </div>
  );
}

function SiteDetailSkeleton() {
  return (
    <div className="container max-w-5xl mx-auto p-4 md:p-8">
      <Skeleton className="h-8 w-36 mb-6" />
      <Skeleton className="w-full h-64 md:h-96 rounded-lg mb-8" />
      <div className="text-center mb-6">
        <Skeleton className="h-12 w-1/2 mx-auto" />
      </div>
      <div className="space-y-3 max-w-none mx-auto">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
      </div>
      <div className="my-8 text-center">
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
    </div>
  )
}
