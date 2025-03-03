import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
    return (
        <section id="team" className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-b text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
                <span className="text-orange-600">
                संस्थापक </span> के बारे में
                </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-5 md:mt-10">
        <Card className="bg-orange-200 shadow-lg shadow-black">
            <CardContent className="p-6">
            <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                src="/images/about-team/2.png"
                alt="Team member"
                width={400}
                height={400}
                className="object-cover rounded-full"
                />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins]">डॉ. अशोक चतुर्वेदी</h3>
            <p className="text-lg text-gray-800 mb-2 prose text-justify">संयुक्त कलेक्टर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन</p>
            <p className="text-lg text-gray-500 prose text-justify">हाँ, यह आपका संक्षिप्त संस्करण है: एक प्रतिष्ठित *प्रशासनिक अधिकारी, शिक्षाविद् और समाजसेवी* हैं, जिनका *19+ वर्षों का प्रशासनिक अनुभव* है। वे *ISO प्रमाणित पंचायत कार्यालय* स्थापित करने और *डिजिटल प्रशासनिक सुधार* लाने में अग्रणी रहे हैं। उन्होंने *नीति निर्माण, प्रशिक्षण और ग्रामीण विकास* में उल्लेखनीय योगदान दिया है। समाजसेवा और आध्यात्मिक गतिविधियों में सक्रिय रहते हुए, वे *राम कथा, सांस्कृतिक जागरूकता और पर्यावरण संरक्षण* अभियानों से जुड़े हैं। वे *YouTube, Facebook और Instagram* पर भी सक्रिय हैं, जहाँ वे अपने विचार और सामाजिक पहल साझा करते हैं।</p>
            {/* <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins]">डॉ अशोक "हरिवंश"</h3>
            <p className="text-xl text-gray-800  prose text-justify">कथावाचक एवं संस्थापक लोक में राम शोध संस्थान </p>
            <p className="text-lg text-gray-500  prose text-justify">हाँ, यह आपका संक्षिप्त संस्करण है:  एक प्रतिष्ठित *शिक्षाविद्, मोटिवेशनल स्पीकर और काउंसलर* हैं, जो शिक्षा, पारिवारिक और व्यक्तिगत मार्गदर्शन में गहरा अनुभव रखते हैं। उन्होंने *300 से अधिक स्कूलों का दौरा* किया और *4,000+ छात्रों* को प्रेरित किया है। वे *टॉपर्स एजुकेशनल सोसायटी* के सचिव, *विजडम वे हायर सेकेंडरी स्कूल* के निदेशक और *"सतत् छत्तीसगढ़"* पत्रिका के संपादक हैं। *राष्ट्रीय पुस्तक मेला, साहित्य महोत्सव और शिक्षा मेले* के आयोजक होने के साथ, वे शिक्षा और युवा सशक्तिकरण के प्रति समर्पित हैं। उनके प्रेरणादायक संवाद कौशल, व्यवहारगत समझ और आध्यात्मिक दृष्टिकोण ने उन्हें एक प्रभावशाली व्यक्तित्व बनाया है।</p> */}
            </CardContent>
        </Card>

        <Card className="bg-orange-200 shadow-lg shadow-black">
            <CardContent className="p-6">
            <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                src="/images/about-team/3.png"
                alt="Team member"
                width={400}
                height={400}
                className="object-cover rounded-full"
                />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins]">डॉ नागेन्द्र दुबे </h3>
            <p className="text-lg text-gray-800 mb-2 prose text-justify">संपादक, चिंतक, संस्थापक लोक में राम शोध संस्थान</p>
            <p className="text-lg text-gray-500 prose text-justify">हाँ, यह आपका संक्षिप्त संस्करण है:  एक प्रतिष्ठित *शिक्षाविद्, मोटिवेशनल स्पीकर और काउंसलर* हैं, जो शिक्षा, पारिवारिक और व्यक्तिगत मार्गदर्शन में गहरा अनुभव रखते हैं। उन्होंने *300 से अधिक स्कूलों का दौरा* किया और *4,000+ छात्रों* को प्रेरित किया है। वे *टॉपर्स एजुकेशनल सोसायटी* के सचिव, *विजडम वे हायर सेकेंडरी स्कूल* के निदेशक और *&quot;सतत् छत्तीसगढ़&quot;* पत्रिका के संपादक हैं। *राष्ट्रीय पुस्तक मेला, साहित्य महोत्सव और शिक्षा मेले* के आयोजक होने के साथ, वे शिक्षा और युवा सशक्तिकरण के प्रति समर्पित हैं। उनके प्रेरणादायक संवाद कौशल, व्यवहारगत समझ और आध्यात्मिक दृष्टिकोण ने उन्हें एक प्रभावशाली व्यक्तित्व बनाया है।</p>
            </CardContent>
        </Card>
        </div>
    </div>
    </section>
    )
}






