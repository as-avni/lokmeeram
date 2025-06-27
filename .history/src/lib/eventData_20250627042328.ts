export interface EventCardData {
    id: number;
    name: string;
    date: string;
    description: string;
    imageSrc: string;
    phoneNumber: string;
    googleFormUrl: string;
}
export const cardData: EventCardData[] = [
    {
    id: 1,
    name: "लोक में राम उत्सव - भोपाल",
    date: "2025-07-14",
    description: "मध्य प्रदेश की जनजातीय विरासत, संगीत, नृत्य और लोक परंपराओं का उत्सव। एक जीवंत सांस्कृतिक अनुभव।",
    imageSrc: "/images/events/1.png",
    phoneNumber: "+91-7894561230",
    googleFormUrl: "https://forms.gle/LokMeRamBhopal2025",
    },
    {
    id: 2,
    name: "लोक में राम उत्सव - इंदौर",
    date: "2025-08-20",
    description: "इंदौर की रंगीन गलियों में लोक संगीत और नृत्य का भव्य आयोजन। सांस्कृतिक परंपराओं का शानदार उत्सव।",
    imageSrc: "/images/events/indore-utsav.png",
    phoneNumber: "+91-9876543210",
    googleFormUrl: "https://forms.gle/LokMeRamIndore2025",
    },
    {
    id: 3,
    name: "लोक में राम उत्सव - जबलपुर",
    date: "2025-09-10",
    description: "जबलपुर में लोक कला, शिल्प और पारंपरिक व्यंजनों के साथ एक समृद्ध सांस्कृतिक अनुभव।",
    imageSrc: "/images/events/jabalpur-utsav.jpg",
    phoneNumber: "+91-9123456789",
    googleFormUrl: "https://forms.gle/LokMeRamJabalpur2025",
    }
]