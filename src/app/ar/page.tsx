
'use client';
import React, { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera } from 'lucide-react';
import Link from 'next/link';

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
    // This page is now a fallback. The main AR experience is in /ar-view/
    // We redirect if a model ID is present, just in case old links are used.
    if (id) {
      router.replace(`/ar-view/index.html?modelId=${id}`);
    }
  }, [id, router]);

  if (id) {
    return (
        <div className="text-white text-center p-8">
            <h2 className="text-2xl font-bold">Redirecting to AR Viewer...</h2>
            <p className="mt-2 text-lg">Please wait a moment.</p>
        </div>
    );
  }

  return (
    <div className="text-white text-center p-8">
        <Camera className="h-16 w-16 mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold">No Model Selected</h2>
        <p className="mt-2 text-lg">Please select a heritage site or artifact to view in AR.</p>
        <Button asChild variant="outline" className="mt-8 text-foreground">
            <Link href="/sites">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go to Sites
            </Link>
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
