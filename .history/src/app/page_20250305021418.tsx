import About from "./about/page"
import Hero from "@/components/hero-section"
import Team from "./team/page"
import Gallery from "./photo-gallery/page"
import RegForm from "@/components/form"
import YouTubeEmbed from "@/components/ui/youtube"

export default function Home() {
  return (
    <>
      <div className="bg-[#fff5ef] ">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <YouTubeEmbed videoId="UCJJap_3RGZ2UxqLTLz0K39g" title="My Favorite Video" />
        <RegForm />
      </div>
      </>
  ) 
}
