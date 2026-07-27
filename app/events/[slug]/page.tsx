import { PageShell } from "@/components/layout/page-shell";
import { EventDetailPage } from "@/components/pages/event-detail-page";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <PageShell>
      <EventDetailPage slug={slug} />
    </PageShell>
  );
}
