import FirstScreen from '@/components/first-screen'
import TopPayouts from '@/components/top-payouts'
import CategoryPills from '@/components/category-pills'
import SeoArticle from '@/components/seo-article'
import SiteFooter from '@/components/site-footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground flex min-h-dvh flex-col">
      <FirstScreen />
      <TopPayouts />
      <CategoryPills />
      <SeoArticle />
      <SiteFooter />
    </main>
  )
}
