"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
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

  const handleImageClick = (cardId: number, imageSrc: string, name: string) => {
    const company = cardData.find((c) => c.id === cardId)
    if (!company) return
    setSelectedImage({
      id: cardId,
      src: company.imageSrc.replace("80", "400"),
      alt: `${company.name} Logo`
    })
  }

  return (
    <div className="bg-[url('/images/background/bg-events.png')] bg-cover bg-center bg-no-repeat min-h-screen">
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-8 md:mt-28">आयोजन</h1>
      <div className="space-y-4">
        {cardData.map((card) => (
          <Card key={card.id} className="w-full p-6 bg-white/10">
            {/* <CardHeader>
              <CardTitle className="text-lg font-medium">{card.name}</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div className="flex gap-4 items-center">
                {/* Left side - Clickable Image */}
                <div
                  className="w-36 h-32 flex-shrink-0 cursor-pointer hover:bg-gray-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
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
                    src={card.imageSrc}
                    alt={`${card.name} logo`}
                    width={128}
                    height={128}
                    className="w-full h-full"
                  />
                </div>

                {/* Right side - Text content */}
                <div className="flex-1 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">{card.name}</span>
                  </div>
                  <div className="text-sm text-gray-500">{card.date}</div>
                  <div className="text-sm text-gray-600">
                    <span>{card.description}</span>
                  </div>
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
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-2xl border-none shadow-none bg-transparent">
            <DialogHeader>
              <DialogTitle>{selectedImage?.alt || "Company Logo"}</DialogTitle>
            </DialogHeader>
            {selectedImage && (
              <div className="flex justify-center p-4">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  width={600}
                  height={600}
                  className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
    </div>
  )
}
