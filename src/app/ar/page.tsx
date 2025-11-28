
'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { ModelViewer } from '@/components/common/ModelViewer';

function ARContent() {
  const params = useSearchParams();
  const id = params.get('id');

  if (!id) {
    return <div className="text-white">No model specified.</div>;
  }

  // Map IDs to actual model files
  const modelMap: { [key: string]: string } = {
    'taj': '/models/taj_mahal_3d_model.glb',
    'qutub': '/models/qutub_minar.glb',
    'konark': '/models/sun_temple.glb',
    'hampi': '/models/hampi_high.glb',
    'ajanta': '/models/ajanta_low.glb',
    'mughal-painting': '/models/mughal_painting.glb',
    'vijayanagara-coin': '/models/vijayanagara_coin.glb',
    'iron-pillar': '/models/iron_pillar_inscription.glb',
  };

  const modelSrc = modelMap[id];
  
  const altTextMap: { [key: string]: string } = {
    'taj': 'Taj Mahal',
    'qutub': 'Qutub Minar',
    'konark': 'Konark Sun Temple',
    'hampi': 'Hampi',
    'ajanta': 'Ajanta Caves',
    'mughal-painting': 'Mughal Miniature Painting',
    'vijayanagara-coin': 'Vijayanagara Coin',
    'iron-pillar': 'Iron Pillar Inscription',
  };
  
  const altText = altTextMap[id] || 'Heritage 3D Model';

  if (!modelSrc) {
    return <div className="text-white">Model not found for ID: {id}</div>;
  }

  return (
    <ModelViewer
        src={modelSrc}
        alt={`AR view of ${altText}`}
    />
  );
}


export default function ARPage() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
       <Suspense fallback={<Skeleton className="h-full w-full bg-gray-800" />}>
        <ARContent />
       </Suspense>
    </div>
  );
}
