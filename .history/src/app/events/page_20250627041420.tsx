"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cardData } from "@/lib/eventData"

export default function EnhancedWireframeCards() {
  const [loading, setLoading] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null)

  const handleButtonClick = async (cardId: number, buttonType: "button1" | "form") => {
    setLoading(cardId)

    if (buttonType === "button1") {
      // Initiate phone call
      setTimeout(() => {
        const company = cardData.find((c) => c.id === cardId)
        if (company) {
          window.location.href = `tel:${company.phoneNumber}`
        }
        setLoading(null)
      }, 300)
    } else if (buttonType === "form") {
      // Open Google Form from cardData
      setTimeout(() => {
        const company = cardData.find((c) => c.id === cardId)
        if (company && company.googleFormUrl) {
          window.open(company.googleFormUrl, "_blank")
        }
        setLoading(null)
      }, 500)
    }
  }

  const handleImageClick = (cardId: number, imageSrc: string, companyName: string) => {
    setSelectedImage({
      id: cardId,
      src: imageSrc.replace("80", "400"), // Get larger version
      alt: `${companyName} Logo`,
    })
  }

  // const cardData = [
  //   {
  //     id: 1,
  //     companyName: "회사 이름 1",
  //     time: "17 min",
  //     initials: "D.h",
  //     description: "Technology Solutions Company",
  //     imageSrc: "/placeholder.svg?height=80&width=80&text=Tech+Co",
  //     phoneNumber: "+82-2-1234-5671",
  //     googleFormUrl: "https://forms.google.com/tech-company-form",
  //   },
  //   {
  //     id: 2,
  //     companyName: "회사 이름 2",
  //     time: "25 min",
  //     initials: "A.k",
  //     description: "Healthcare Innovation Hub",
  //     imageSrc: "/placeholder.svg?height=80&width=80&text=Health+Co",
  //     phoneNumber: "+82-2-1234-5672",
  //     googleFormUrl: "https://forms.google.com/healthcare-company-form",
  //   },
  //   {
  //     id: 3,
  //     companyName: "회사 이름 3",
  //     time: "12 min",
  //     initials: "M.j",
  //     description: "Financial Services Group",
  //     imageSrc: "/placeholder.svg?height=80&width=80&text=Finance+Co",
  //     phoneNumber: "+82-2-1234-5673",
  //     googleFormUrl: "https://forms.google.com/finance-company-form",
  //   },
  // ]

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center  text-black">आयोजन</h1>
      <div className="space-y-4">
        {cardData.map((card) => (
          <Card key={card.id} className="w-full">
            {/* <CardHeader>
              <CardTitle className="text-lg font-medium">{card.name}</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div className="flex gap-4">
                {/* Left side - Clickable Image */}
                <div
                  className="w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded flex-shrink-0 cursor-pointer hover:bg-gray-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
                  onClick={() => handleImageClick(card.id, card.imageSrc, card.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleImageClick(card.id, card.imageSrc, card.name)
                    }
                  }}
                >
                  <Image
                    src={card.imageSrc || "/placeholder.svg"}
                    alt={`${card.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Right side - Text content */}
                <div className="flex-1 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">{card.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>{card.description}</span>
                  </div>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex gap-3 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => handleButtonClick(card.id, "button1")}
                  disabled={loading === card.id}
                >
                  {loading === card.id ? "Calling..." : "Call Now"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => handleButtonClick(card.id, "form")}
                  disabled={loading === card.id}
                >
                  Google Form
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedImage?.alt || "Company Logo"}</DialogTitle>
            </DialogHeader>
            {selectedImage && (
              <div className="flex justify-center p-4">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
