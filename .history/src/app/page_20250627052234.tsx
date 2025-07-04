import About from "./about/page"
import Hero from "@/components/hero-section"
import Team from "./team/page"
import Gallery from "./photo-gallery/page"
import RegForm from "@/components/form"
import YouTubeSection1 from "@/components/social/YT-section"
import SocialDashboard from "@/components/social/socials"

export default function Home() {
  return (
    <>
      <div className="bg-[#fff5ef] ">
        <Hero />
        <About />
        <Team />
        {/* <Gallery /> */}
        <YouTubeSection1/>
        <SocialDashboard/>
        <RegForm />
      </div>
      </>
  ) 
}
