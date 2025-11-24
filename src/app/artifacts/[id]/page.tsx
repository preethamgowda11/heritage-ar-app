import { getArtifactById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArtifactDetailView } from '@/components/artifacts/ArtifactDetailView';

interface ArtifactDetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ArtifactDetailPage({ params, searchParams }: ArtifactDetailPageProps) {
  const artifact = getArtifactById(params.id);

  if (!artifact) {
    notFound();
  }

  const launchAR = searchParams?.ar === 'true';

  return <ArtifactDetailView artifact={artifact} launchAR={launchAR} />;
}
