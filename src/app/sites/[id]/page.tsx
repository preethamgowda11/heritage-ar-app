import { getSiteById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SiteDetailView } from '@/components/sites/SiteDetailView';

interface SiteDetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function SiteDetailPage({ params, searchParams }: SiteDetailPageProps) {
  const site = getSiteById(params.id);

  if (!site) {
    notFound();
  }
  
  const launchAR = searchParams?.ar === 'true';

  return <SiteDetailView site={site} launchAR={launchAR} />;
}
