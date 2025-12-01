
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
