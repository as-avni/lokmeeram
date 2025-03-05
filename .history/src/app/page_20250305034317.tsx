import About from "./about/page"
import Hero from "@/components/hero-section"
import Team from "./team/page"
import Gallery from "./photo-gallery/page"
import RegForm from "@/components/form"
import YouTubeEmbed from "@/components/ui/youtube"
import InstagramFeed from "@/components/ui/instagram"

export default function Home() {
  return (
    <>
      <div className="bg-[#fff5ef] ">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <div className="flex flex-row">
          <div></div>
          <h1 className="text-center text-black text-2xl font-bold mb-4">Latest Videos</h1>
          <YouTubeEmbed />
          <h1 className="text-3xl font-bold text-black text-center my-6">Chitrashala Production</h1>
          <InstagramFeed />
        </div>
        <RegForm />
      </div>
      </>
  ) 
}
