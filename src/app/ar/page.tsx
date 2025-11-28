
'use client';
import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { ModelViewer } from '@/components/common/ModelViewer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

function ARContent() {
  const params = useSearchParams();
  const id = params.get('id');
  const router = useRouter();

  if (!id) {
    return <div className="text-white">No model specified.</div>;
  }

  // Map IDs to actual model files
  const modelMap: { [key: string]: string } = {
    'taj': '/models/taj_mahal_3d_model.glb',
    'qutub': '/models/qutub_minar.glb',
    'konark': '/models/sun_temple.glb',
    'hampi': '/models/hampi_high.glb',
    'mughal-painting': '/models/mughal_painting.glb',
    'vijayanagara-coin': '/models/vijayanagara_coin.glb',
    'iron-pillar': '/models/iron_pillar_inscription.glb',
    'rani-ki-vav': '/models/rani_ki_vav.glb',
    'charminar': '/models/charminar.glb',
    'jagannath-puri': '/models/jagannath_puri.glb',
    'ellora-caves': '/models/ellora_caves.glb',
    'sanchi-stupa': '/models/sanchi_stupa.glb',
  };

  const modelSrc = modelMap[id];
  
  const altTextMap: { [key: string]: string } = {
    'taj': 'Taj Mahal',
    'qutub': 'Qutub Minar',
    'konark': 'Konark Sun Temple',
    'hampi': 'Hampi',
    'mughal-painting': 'Mughal Miniature Painting',
    'vijayanagara-coin': 'Vijayanagara Coin',
    'iron-pillar': 'Iron Pillar Inscription',
    'rani-ki-vav': 'Rani-ki-Vav',
    'charminar': 'Charminar',
    'jagannath-puri': 'Jagannath Puri Temple',
    'ellora-caves': 'Ellora Caves',
    'sanchi-stupa': 'Sanchi Stupa',
  };
  
  const altText = altTextMap[id] || 'Heritage 3D Model';

  if (!modelSrc) {
    return <div className="text-white">Model not found for ID: {id}</div>;
  }

  return (
    <>
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 text-white hover:bg-white/20 hover:text-white"
        >
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Go back</span>
        </Button>
        <ModelViewer
            src={modelSrc}
            alt={`AR view of ${altText}`}
        />
    </>
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
