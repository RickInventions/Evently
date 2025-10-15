"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { siteData } from "@/data/siteData"

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  const images = siteData.gallery.images

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    setSlideDirection(null)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setSlideDirection("left")
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
      setSlideDirection(null)
    }, 150)
  }

  const prevImage = () => {
    setSlideDirection("right")
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      setSlideDirection(null)
    }, 150)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 grain-texture" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 text-center text-primary-foreground container-custom px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-up">Our Gallery</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in leading-relaxed">
            A glimpse into the unforgettable moments we've created
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer group animate-fade-in aspect-square"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover-lift h-full">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-6">
                    <p className="text-primary-foreground font-medium text-sm md:text-base">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-6 p-2 md:p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </button>

          {/* Image Container with Slide Animation */}
          <div className="max-w-7xl max-h-[90vh] px-12 md:px-20 w-full flex flex-col items-center justify-center">
            <div
              className={`relative w-full transition-all duration-300 ease-out ${
                slideDirection === "left"
                  ? "opacity-0 -translate-x-8"
                  : slideDirection === "right"
                    ? "opacity-0 translate-x-8"
                    : "opacity-100 translate-x-0"
              }`}
            >
              <img
                src={images[currentImageIndex].src || "/placeholder.svg"}
                alt={images[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto"
              />
            </div>
            <p className="text-primary-foreground text-center mt-4 text-base md:text-lg font-medium">
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-6 p-2 md:p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Gallery
