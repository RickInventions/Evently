"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import TestimonialCarousel from "../components/TestimonialCarousel"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { siteData } from "@/data/siteData"

const Index = () => {
  const navigate = useNavigate()

  const highlights = siteData.services.slice(0, 3)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Home Highlights Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container-custom relative">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              Our Signature Services
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From intimate celebrations to grand events, we create unforgettable experiences in elegant spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <ServiceCard
                key={index}
                title={highlight.name}
                description={highlight.description}
                image={highlight.image}
                icon={highlight.icon}
                buttonText="Explore"
                onButtonClick={() => navigate("/services")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="container-custom relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in-up px-4 leading-tight">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-md hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={siteData.testimonials} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain-texture" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container-custom relative text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-lg sm:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Let's bring your vision to life in our elegant spaces. Contact us today to start planning.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 h-12 sm:h-14 rounded-lg text-base sm:text-lg font-semibold bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
