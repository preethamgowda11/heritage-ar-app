
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Site } from '@/types';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { optimizeContent, OptimizeContentOutput } from '@/ai/flows/adaptive-content-optimization';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gem, Image as ImageIcon, View } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SpeechSynthesisPlayer } from '@/components/common/SpeechSynthesisPlayer';
import { useTranslation } from '@/hooks/use-translation';

interface SiteDetailViewProps {
  site: Site;
}

export function SiteDetailView({ site }: SiteDetailViewProps) {
  const { isLowBandwidth, isAccessibilityOn, isAudioOn } = useUserPreferences();
  const [optimizedData, setOptimizedData] = useState<OptimizeContentOutput['optimizedSiteData'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useTranslation();
  
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
    
  const fallback360Image = PlaceHolderImages.find(p => p.id === site.fallback360UrlId);

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
  
  const arUrl = `/ar-viewer.html?model=${encodeURIComponent(optimizedData.modelUrl || '')}`;

  return (
    <div className="container max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-6 flex justify-between items-center">
        <Button asChild variant="outline" size="sm">
            <Link href="/sites"><ArrowLeft className="mr-2 h-4 w-4" />{t('back_to_all_sites')}</Link>
        </Button>
        {optimizedData.modelUrl && (
          <Button asChild>
            <a href={arUrl} target="_blank" rel="noopener noreferrer">
              <View className="mr-2 h-4 w-4" />
              {t('launch_ar')}
            </a>
          </Button>
        )}
      </div>
      
      {coverImage && (
         <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg bg-muted">
            <Image 
              src={coverImage.url} 
              alt={`Cover image of ${optimizedData.title}`} 
              fill 
              className="object-cover" 
              data-ai-hint={coverImage.hint}
              priority
            />
         </div>
      )}
      
      <header className="mb-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{optimizedData.title}</h1>
      </header>
      
      <article className="prose prose-lg max-w-none mx-auto text-foreground/90 mb-6">
        <p>{optimizedData.longDescription}</p>
      </article>

      {fallback360Image && (
        <div className="text-center my-6">
          <Button asChild variant="outline">
              <a href={fallback360Image.imageUrl} target="_blank" rel="noopener noreferrer">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  360 View
              </a>
          </Button>
        </div>
      )}

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
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-9 w-28" />
      </div>
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
