import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
    return (
        <section id="team" className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
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
            <p className="text-lg font-semibold text-gray-800 mb-2 prose text-justify">संयुक्त कलेक्टर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन</p>
            <p className="text-lg text-gray-500 prose text-justify">एक सम्मानित <strong>रशासनिक अधिकारी, शिक्षाविद् और समाजसेवी</strong>, जिनके पास <strong>19+ वर्षों का प्रशासनिक अनुभव</strong> है। उन्होंने <strong>ISO प्रमाणित पंचायत कार्यालय</strong> की स्थापना और <strong>डिजिटल प्रशासनिक सुधार</strong> को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाई है। उनका योगदान <strong>नीति निर्माण, प्रशिक्षण और ग्रामीण विकास</strong> में सराहनीय रहा है। समाज सेवा और आध्यात्मिक गतिविधियों में सक्रिय रहते हुए, वे <strong>राम कथा, सांस्कृतिक जागरूकता और पर्यावरण संरक्षण</strong> अभियानों से जुड़े हुए हैं। साथ ही, वे <strong>YouTube, Facebook और Instagram</strong> पर भी सक्रिय रहते हैं, जहाँ वे अपने विचार और सामाजिक पहल साझा करते हैं।</p>
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
            <p className="text-lg font-semibold text-gray-800 mb-2 prose text-justify">संपादक, चिंतक, संस्थापक लोक में राम शोध संस्थान</p>
            <p className="text-lg text-gray-500 prose text-justify">एक प्रतिष्ठित <strong>शिक्षाविद्, मोटिवेशनल स्पीकर और काउंसलर</strong>, जिन्हें शिक्षा, पारिवारिक और व्यक्तिगत मार्गदर्शन में व्यापक अनुभव है। उन्होंने <strong>300 से अधिक स्कूलों का दौरा</strong> किया और <strong>4,000+ छात्रों</strong> को प्रेरित किया है। वे <strong>टॉपर्स एजुकेशनल सोसायटी</strong> के सचिव, <strong>विजडम वे हायर सेकेंडरी स्कूल</strong> के निदेशक और <strong>&quot;सतत् छत्तीसगढ़&quot;</strong> पत्रिका के संपादक हैं। <strong>राष्ट्रीय पुस्तक मेला, साहित्य महोत्सव और शिक्षा मेले</strong> के आयोजक होने के नाते, वे शिक्षा और युवा सशक्तिकरण के लिए प्रतिबद्ध हैं। उनके प्रेरणादायक संवाद कौशल, व्यवहारगत समझ और आध्यात्मिक दृष्टिकोण ने उन्हें एक प्रभावशाली व्यक्तित्व बनाया है।
            </p>
            </CardContent>
        </Card>
        </div>
    </div>
    </section>
    )
}






