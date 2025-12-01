
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
import { ArrowLeft, Gem, View } from 'lucide-react';
import { ModelViewer } from '@/components/common/ModelViewer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SpeechSynthesisPlayer } from '@/components/common/SpeechSynthesisPlayer';
import { useTranslation } from '@/hooks/use-translation';
import { useRouter } from 'next/navigation';

interface SiteDetailViewProps {
  site: Site;
  launchAR: boolean;
}

export function SiteDetailView({ site, launchAR: initialLaunchAR }: SiteDetailViewProps) {
  const { isLowBandwidth, isAccessibilityOn, isAudioOn } = useUserPreferences();
  const [optimizedData, setOptimizedData] = useState<OptimizeContentOutput['optimizedSiteData'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useTranslation();
  const router = useRouter();
  
  const modelIdMap: { [key: string]: string } = {
    'site-1': 'taj',
    'site-2': 'hampi',
    'site-3': 'qutub',
    'site-4': 'konark',
    'site-6': 'rani-ki-vav',
    'site-7': 'charminar',
    'site-8': 'jagannath-puri',
    'site-9': 'ellora-caves',
    'site-10': 'sanchi-stupa',
  };
  const modelId = modelIdMap[site.id];

  const handleLaunchAR = () => {
    if (optimizedData?.title && optimizedData?.longDescription) {
        sessionStorage.setItem('ar_title', optimizedData.title);
        sessionStorage.setItem('ar_description', optimizedData.longDescription);
        sessionStorage.setItem('ar_lang', language);
    }
    router.push(`/ar-view/index.html?modelId=${modelId}`);
  };

  useEffect(() => {
    if (initialLaunchAR && modelId) {
        if (optimizedData) {
            handleLaunchAR();
        }
    }
  }, [initialLaunchAR, modelId, optimizedData]);


  useEffect(() => {
    const processContent = async () => {
      setIsLoading(true);
      const input = {
        siteData: {
          title: site.title[language],
          shortDescription: site.shortDescription[language],
          longDescription: site.longDescription[language],
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
  }, [site, isLowBandwidth, isAccessibilityOn, isAudioOn, language]);

  const coverImage = optimizedData?.coverImageUrl
    ? {
        url: optimizedData.coverImageUrl,
        hint: PlaceHolderImages.find(p => p.imageUrl === optimizedData.coverImageUrl)?.imageHint || 'heritage site'
      }
    : null;

  if (isLoading) {
    return <SiteDetailSkeleton />;
  }

  if (!optimizedData) {
    return (
      <div className="container text-center py-20">
        <p>Could not load site details.</p>
        <Button asChild variant="link" className="mt-4">
            <Link href="/sites"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_sites')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-6 flex justify-between items-center">
        <Button asChild variant="outline" size="sm">
            <Link href="/sites"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_sites')}</Link>
        </Button>
        {modelId && (
            <Button onClick={handleLaunchAR}>
                <View className="mr-2 h-4 w-4" />
                {t('launch_ar')}
            </Button>
        )}
      </div>
      
      {optimizedData.modelUrl && (
        <div className="mb-8">
          <ModelViewer src={optimizedData.modelUrl} alt={`3D model of ${optimizedData.title}`} posterId={site.coverImageUrlId} />
        </div>
      )}

      {!optimizedData.modelUrl && coverImage && (
         <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src={coverImage.url} alt={`Cover image of ${optimizedData.title}`} fill className="object-cover" data-ai-hint={coverImage.hint} />
         </div>
      )}
      

      <header className="mb-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{optimizedData.title}</h1>
      </header>
      
      <article className="prose prose-lg max-w-none mx-auto text-foreground/90 mb-6">
        <p>{optimizedData.longDescription}</p>
      </article>

      <div className="my-6">
        <SpeechSynthesisPlayer text={optimizedData.longDescription || ''} />
      </div>
      
      {site.artifacts.length > 0 && (
        <div className="mt-12">
            <h3 className="text-2xl font-headline mb-4 text-center">{t('related_artifacts')}</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {site.artifacts.map(artifact => (
                    <Link key={artifact.id} href={`/artifacts/${artifact.id}`} className="group block">
                        <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
                            <CardHeader className="p-0">
                                <div className="relative aspect-square">
                                    <Image 
                                        src={PlaceHolderImages.find(p => p.id === artifact.imageUrlId)?.imageUrl || ''} 
                                        alt={artifact.title.en}
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-3">
                                <p className="text-sm font-semibold truncate">{artifact.title[language]}</p>
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
      <Skeleton className="w-full h-96 rounded-lg mb-8" />
      <div className="text-center mb-6">
        <Skeleton className="h-12 w-1/2 mx-auto" />
      </div>
      <div className="space-y-3 max-w-none mx-auto">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
      </div>
    </div>
  )
}
