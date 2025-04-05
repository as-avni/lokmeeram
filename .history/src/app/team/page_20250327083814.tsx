import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
    return (
        <section id="team" className="px-4 py-12 md:py-16 bg-[url('/images/background/team-bg.png')] bg-blend-color-burn bg- bg-center bg-no-repeat overflow-visible">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
                <span className="text-orange-600">
                संस्थापकों </span> के 
                विषय में
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
            <p className="text-lg font-semibold text-gray-800 mb-2 prose text-justify">संयुक्त 
            कमिशनर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन</p>
            <p className="text-lg text-gray-500 prose text-justify">दण्डकारण्य क्षेत्र के बस्तर स्थित दुर्गकोबडल में जन्में श्री डॉ. अशोक हरिवंश <strong> ‘भैया जी’</strong> राजनीति शास्त्र, मानव संसाधन प्रबंधन एवं मानवाधिकार विषयों में उच्च शिक्षा प्राप्त भैया जी प्रशासन में एक उत्कृष्ट अधिकारी के रूप में विद्यमान हैं।

जगद्गुरु श्रीरामानुजाचार्य की कृपा एवं माता-पिता के निर्देश में बचपन से ही धर्म के क्षेत्र में “राम और राष्ट्र एक” मंत्र को जीवन का ध्येय मानुषि, धर्म एवं राष्ट्र की सेवा में समर्पित होकर श्री रामकथा वाचक के रूप में प्रचार-प्रसार कर रहे हैं।

भारतीय संस्कृति एवं विरासत की पुनर्स्थापना हेतु प्रयास करना, धर्मांतरण के विकराल तथा नशामुक्ति हेतु अभियान का संचालन, देश के हर घर में श्रीरामचरितमानस एवं श्रीमद्भागवद्गीता का होना सुनिश्चित करने हेतु, हिंदू धार्मिक बंधनों के यह शांत वातावरण में भारतीय आश्रम के अनुभव भी प्रदान करता है।</p>
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
            <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins]">नागेन्द्र दुबे </h3>
            <p className="text-lg font-semibold text-gray-800 mb-2 prose text-center">संस्थापक, लोक में राम शोध संस्थान</p>
            <p className="text-lg text-gray-500 prose text-justify">एक प्रतिष्ठित <strong>शिक्षाविद्, मोटिवेशनल स्पीकर और काउंसलर</strong>, जिन्हें शिक्षा, पारिवारिक और व्यक्तिगत मार्गदर्शन में व्यापक अनुभव है। उन्होंने <strong>300 से अधिक स्कूलों का दौरा</strong> किया और <strong>4,000+ छात्रों</strong> को प्रेरित किया है। वे <strong>टॉपर्स एजुकेशनल सोसायटी</strong> के सचिव, <strong>विजडम वे हायर सेकेंडरी स्कूल</strong> के निदेशक और <strong>&quot;सतत् छत्तीसगढ़&quot;</strong> पत्रिका के संपादक हैं। <strong>राष्ट्रीय पुस्तक मेला, साहित्य महोत्सव और शिक्षा मेले</strong> के आयोजक होने के नाते, वे शिक्षा और युवा सशक्तिकरण के लिए प्रतिबद्ध हैं। उनके प्रेरणादायक संवाद कौशल, व्यवहारगत समझ और आध्यात्मिक दृष्टिकोण ने उन्हें एक प्रभावशाली व्यक्तित्व बनाया है।
            </p>
            </CardContent>
        </Card>
        </div>
    </div>
    </section>
    )
}






