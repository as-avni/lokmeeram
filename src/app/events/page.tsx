import Image from "next/image"

export default function AboutSection() {
return (
    <main className="min-h-screen">
    <section className="relative w-full h-[250px] md:h-[800px]">
        <Image
        src={`/images/2.png`}
        alt="लोक में राम - आध्यात्मिक आयोजन"
        fill
        className="object-contain md:object-cover"
        priority
        />
    </section>

    {/* About The Event Section */}
    <section className="px-4 py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">लोक में राम - आध्यात्मिक यात्रा</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
            यह आयोजन सनातन परंपरा और ऋषि ज्ञान को जन-जन तक पहुंचाने का एक प्रयास है। 
            यह भव्य चित्र एक दिव्य मंदिर और आध्यात्मिक ऊर्जा का प्रतीक है, जिसमें ओम् का पवित्र चिन्ह आशीर्वाद स्वरूप प्रकट हो रहा है। 
            हमारा उद्देश्य संस्कृति और धर्म के माध्यम से आत्मिक शांति और सामाजिक सद्भाव को बढ़ावा देना है।
        </p>
        </div>
    </section>

    {/* Event Details Section */}
    <section className="px-4 py-12 md:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">आयोजन की मुख्य विशेषताएँ</h2>
        <ul className="text-gray-700 leading-relaxed text-lg space-y-4">
            <li><strong>पावन कथा:</strong> भगवान श्रीराम की जीवनगाथा और सनातन धर्म का महत्व।</li>
            <li><strong>सांस्कृतिक प्रस्तुतियाँ:</strong> भक्ति संगीत, नृत्य और नाट्य मंचन।</li>
            <li><strong>संस्कार कार्यशालाएँ:</strong> युवाओं और बच्चों के लिए विशेष सत्र।</li>
            <li><strong>हवन एवं पूजन:</strong> सकारात्मक ऊर्जा और आध्यात्मिक शुद्धिकरण के लिए विशेष अनुष्ठान।</li>
            <li><strong>भंडारा एवं प्रसाद वितरण:</strong> सभी भक्तों के लिए निशुल्क प्रसाद एवं भोजन सेवा।</li>
        </ul>
        </div>
    </section>
    
    </main>
)
}