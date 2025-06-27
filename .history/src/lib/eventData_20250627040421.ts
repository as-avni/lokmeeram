export interface EventCardData {
    id: number;
    companyName: string;
    time: string;
    initials: string;
    description: string;
    imageSrc: string;
    phoneNumber: string;
    googleFormUrl: string;
}
export const cardData: EventCardData[] = [
    {
    id: 1,
    name: "회사 이름 1",
    date    description: "Technology Solutions Company",
    imageSrc: "/placeholder.svg?height=80&width=80&text=Tech+Co",
    phoneNumber: "+82-2-1234-5671",
    googleFormUrl: "https://forms.google.com/tech-company-form",
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