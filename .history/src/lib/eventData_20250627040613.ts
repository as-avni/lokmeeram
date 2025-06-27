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
    imageSrc: "/images/events/bhopal-utsav.jpg",
    phoneNumber: "+91-7894561230",
    googleFormUrl: "https://forms.gle/LokMeRamBhopal2025",
    },
    {
    id: 2,
    companyName: "회사 이름 2",
    time: "25 min",
    initials: "A.k",
    description: "Healthcare Innovation Hub",
    imageSrc: "/placeholder.svg?height=80&width=80&text=Health+Co",
    phoneNumber: "+82-2-1234-5672",
    googleFormUrl: "https://forms.google.com/healthcare-company-form",
    },
    {
    id: 3,
    companyName: "회사 이름 3",
    time: "12 min",
    initials: "M.j",
    description: "Financial Services Group",
    imageSrc: "/placeholder.svg?height=80&width=80&text=Finance+Co",
    phoneNumber: "+82-2-1234-5673",
    googleFormUrl: "https://forms.google.com/finance-company-form",
    },
]