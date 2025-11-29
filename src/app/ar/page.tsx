
'use client';
import React, { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera } from 'lucide-react';

function ARContent() {
  const params = useSearchParams();
  const id = params.get('id');
  const router = useRouter();

  const modelMap: { [key: string]: string } = {
    'taj': '/models/taj_mahal_3d_model.glb',
    'qutub': '/models/qutub_minar.glb',
    'konark': '/models/sun_temple.glb',
    'hampi': '/models/hampi_high.glb',
    'mughal-painting': '/models/mughal_painting.glb',
    'vijayanagara-coin': '/models/vijayanagara_coin.glb',
    'iron-pillar': '/models/iron_pillar_inscription.glb',
    'rani-ki-vav': '/models/rani-ki-vav.glb',
    'charminar': '/models/charminar_hyderabad.glb',
    'jagannath-puri': '/models/jagannath_puri_temple_model.glb',
    'ellora-caves': '/models/ellora_caves__india.glb',
    'sanchi-stupa': '/models/great_stupa_in_sanchi.glb',
    'lakshmi-narasimha': '/models/lakshmi_narasimha.glb',
    'harihara': '/models/harihara_statue.glb',
    'chhau-mask': '/models/chhau_mask.glb',
    'konark-wheel': '/models/konark_wheel.glb'
  };

  const modelSrc = id ? modelMap[id] : null;

  useEffect(() => {
    if (modelSrc) {
      const modelUrl = `${window.location.origin}${modelSrc}`;
      const fallbackUrl = `${window.location.origin}/sites`;
      const sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${modelUrl}&mode=ar_preferred#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${fallbackUrl};end;`;
      
      window.location.href = sceneViewerUrl;

    }
  }, [modelSrc, router]);

  if (!modelSrc) {
    return (
        <div className="text-white text-center">
            <p>Model not found.</p>
            <Button variant="link" onClick={() => router.back()} className="text-white">Go Back</Button>
        </div>
    );
  }

  return (
    <div className="text-white text-center p-8">
        <Camera className="h-16 w-16 mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold">Launching AR Experience...</h2>
        <p className="mt-2 text-lg">Your device should be opening the 3D model now.</p>
        <p className="mt-1 text-sm text-gray-400">If nothing happens, your device may not support this feature.</p>
        <Button variant="outline" onClick={() => router.back()} className="mt-8 text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
    </div>
  );
}


export default function ARPage() {
  return (
    <div className="h-screen bg-black flex items-center justify-center relative">
       <Suspense fallback={<Skeleton className="h-full w-full bg-gray-800" />}>
        <ARContent />
       </Suspense>
    </div>
  );
}
