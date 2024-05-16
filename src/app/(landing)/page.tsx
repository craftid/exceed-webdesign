import HomeBanner from "./_components/banner"
import Invest from "./_components/invest"
import Newsletter from "./_components/newsletter"
import Nfts from "./_components/nfts"
import Partners from "./_components/partners"
import Reshaping from "./_components/reshaping"
import Stats from "./_components/stats"
import WantToPartner from "./_components/want-to-partner"

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <HomeBanner />
      <Invest />
      <Reshaping />
      <Stats />
      <Partners />
      <WantToPartner />
      <Nfts />
      <Newsletter />
    </main>
  )
}
