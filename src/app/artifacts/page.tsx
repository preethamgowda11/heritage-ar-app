import { getArtifacts } from '@/lib/data';
import { ArtifactCard } from '@/components/artifacts/ArtifactCard';
import { PageHeader } from '@/components/common/PageHeader';

export default function ExploreArtifactsPage() {
  const artifacts = getArtifacts();

  return (
    <>
      <PageHeader
        title="Explore Historical Artifacts"
        description="Journey through time with these unique objects from India's past."
      />
      <div className="container px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </div>
    </>
  );
}
