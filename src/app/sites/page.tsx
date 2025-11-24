import { getSites } from '@/lib/data';
import { SiteCard } from '@/components/sites/SiteCard';
import { PageHeader } from '@/components/common/PageHeader';

export default function ExploreSitesPage() {
  const sites = getSites();

  return (
    <>
      <PageHeader
        title="Explore Heritage Sites"
        description="Discover the magnificent historical sites of India."
      />
      <div className="container px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </>
  );
}
