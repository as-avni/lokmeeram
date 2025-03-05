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
        <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black text-center my-6">And TV</h1>
          <YouTubeEmbed />
          </div>
          <div>
          <h1 className="text-3xl font-bold text-black text-center my-6">Instagram Handle</h1>
          <InstagramFeed /></div>
        </div>
        <RegForm />
      </div>
      </>
  ) 
}
