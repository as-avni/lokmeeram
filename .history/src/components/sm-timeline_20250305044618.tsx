import YouTubeEmbed from "@/components/ui/youtube"
import InstagramFeed from "@/components/ui/instagram"
import ElfsightFacebookFeed from "@/components/ui/facebook"

export default function SocialMediaTimeline() {
    return (
        <>
            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
                <span className="text-orange-600">
                सोशल </span> मीडिया
            </h1>
            <div className="bg-[#fff5ef]  grid grid-cols-1 md:grid-cols-3 justify-between gap-2">
                <div>
                    <h1 className="text-3xl font-bold text-black text-center my-6">And TV</h1>
                    <YouTubeEmbed />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-black text-center my-6">Instagram Handle</h1>
                    <InstagramFeed />
                </div>
                <div>
                    <div className="w-72 aspect-[4/3] bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold text-black text-center">Facebook Handle</h1>
                        <ElfsightFacebookFeed />
                    </div>
                </div>
                
            </div>
        </>
    ) 
}