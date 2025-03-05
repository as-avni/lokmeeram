import YouTubeEmbed from "@/components/ui/youtube"
import InstagramFeed from "@/components/ui/instagram"
import ElfsightFacebookFeed from "@/components/ui/facebook"

export default function SocialMediaTimeline() {
    return (
        <>
            <div className="bg-[#fff5ef] flex flex-rows justify-between m-16">

            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
                <span className="text-orange-600">
                संस्थापक </span> मीडिया
            </h1>
                <div>
                    <h1 className="text-3xl font-bold text-black text-center my-6">And TV</h1>
                    <YouTubeEmbed />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-black text-center my-6">Instagram Handle</h1>
                    <InstagramFeed />
                </div>
                <div>
                    <div className="ml-10">
                    <h1 className="text-3xl font-bold text-black text-center my-6">Facebook Handle</h1>
                    <ElfsightFacebookFeed />
                </div>
                </div>
            </div>
        </>
    ) 
}