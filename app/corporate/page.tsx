import { PageShell } from "@/components/layout/page-shell";
import { CategoryPage } from "@/components/pages/category-page";

export default function Page() {
  return (
    <PageShell>
      <CategoryPage slug="corporate" />
    </PageShell>
  );
}
