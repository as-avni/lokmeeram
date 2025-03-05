import YouTubeEmbed from "@/components/ui/youtube"
import InstagramFeed from "@/components/ui/instagram"
import ElfsightFacebookFeed from "@/components/ui/facebook"

export default function Home() {
    return (
      <>
        <div className="bg-[#fff5ef] ">
          <Hero />
          <About />
          <Team />
          <Gallery />
          <div className="flex flex-rows justify-center">
            <div>
            <h1 className="text-3xl font-bold text-black text-center my-6">And TV</h1>
            <YouTubeEmbed />
            </div>
            <div>
            <h1 className="text-3xl font-bold text-black text-center my-6">Instagram Handle</h1>
            <InstagramFeed />
            </div>
            <div>
            <h1 className="text-3xl font-bold text-black text-center my-6">Facebook Handle</h1>
            <ElfsightFacebookFeed />
            </div>
          </div>
          <RegForm />
        </div>
        </>
    ) 
  }