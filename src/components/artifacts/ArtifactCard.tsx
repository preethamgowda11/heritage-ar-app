import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Artifact } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ArtifactCardProps {
  artifact: Artifact;
}

export function ArtifactCard({ artifact }: ArtifactCardProps) {
  const image = PlaceHolderImages.find(p => p.id === artifact.imageUrlId);

  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          {image && (
            <Image
              src={image.imageUrl}
              alt={`Image of ${artifact.title}`}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg">{artifact.title}</CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
         <Button asChild size="sm" variant="outline">
          <Link href={`/artifacts/${artifact.id}`}>
            Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
