import Footer from "../../components/footer"
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
    <>
      <HomeBanner />
      <Invest />
      <Reshaping />
      <Stats />
      <Partners />
      <WantToPartner />
      <Nfts />
      <Newsletter />
      <Footer />
    </>
  )
}
