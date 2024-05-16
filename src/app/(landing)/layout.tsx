import Footer from "@/components/footer"
import Header from "@/components/header"

export default function LandingLayout(props: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
