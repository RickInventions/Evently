"use client"

import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero.jpg" // Assuming heroImage is a local image asset

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(184, 135, 70, 0.85), rgba(62, 47, 28, 0.7))",
        }}
      />

      {/* Grain Texture */}
      <div className="absolute inset-0 grain-texture" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground animate-fade-in-up px-4">
        <h1 className="mb-5 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Celebrate Life's Best <br className="hidden sm:block" />
          Moments With Us
        </h1>
        <p className="mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Elegant spaces, unforgettable memories.
        </p>
        <Button
          variant="hero"
          size="xl"
          onClick={() => navigate("/contact")}
          className="animate-scale-in text-base sm:text-lg h-12 sm:h-14 px-8 sm:px-10"
        >
          Book Your Event
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-1.5 md:pt-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
