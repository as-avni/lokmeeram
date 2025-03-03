import About from "./about/page"
// import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero-section"
import Team from "./team/page"
import Gallery from "./photo-gallery/page"
// import Footer from "@/components/footer"
import RegForm from "@/components/form"

export default function Home() {
  return (
    <div className="bg-[#fff5ef] ">
      {/* <SiteHeader /> */}
      <Hero />
      <About />
      <Team />
      <Gallery />
      <RegForm />
      {/* <Footer /> */}
    </div>
  ) 
}
