/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useNavigate, useParams } from "react-router-dom"
import { siteData } from "@/data/siteData"
import { Check } from "lucide-react"

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = siteData.services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/services")}>Back to Services</Button>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image || "/placeholder.svg"} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
          <div className="absolute inset-0 grain-texture" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground container-custom px-4">
          <Icon className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 animate-float" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-up leading-tight">
            {service.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto animate-fade-in leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl text-center px-4">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{service.fullDescription}</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container-custom relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in-up px-4 leading-tight">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover-lift animate-fade-in border-2 border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground mb-5 md:mb-6 text-sm sm:text-base">
                  {(pkg as any).duration || (pkg as any).capacity || ""}
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg" onClick={() => navigate("/contact")}>
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      {service.id === "catering" && (service as any).menuCategories && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 px-4 leading-tight">
              Sample Menu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {(service as any).menuCategories.map((category: any, index: number) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-primary">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item: string, i: number) => (
                      <li key={i} className="text-foreground flex items-start gap-2 text-sm sm:text-base">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {(service as any).dietaryOptions && (
              <div className="mt-10 md:mt-12 text-center max-w-3xl mx-auto px-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Dietary Accommodations</h3>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {(service as any).dietaryOptions.map((option: string, i: number) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs sm:text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Kids Party Themes */}
      {service.id === "kids" && (service as any).themes && (
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/20">
          <div className="container-custom">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 px-4 leading-tight">
              Popular Party Themes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
              {(service as any).themes.map((theme: string, index: number) => (
                <div
                  key={index}
                  className="bg-card rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow-md hover-lift"
                >
                  <p className="font-semibold text-sm sm:text-base">{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Amenities for Corporate */}
      {service.id === "corporate" && (service as any).amenities && (
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 px-4 leading-tight">
              Venue Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {(service as any).amenities.map((amenity: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 md:gap-3 bg-card p-3.5 md:p-4 rounded-lg md:rounded-xl shadow-sm"
                >
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                  <span className="text-base sm:text-lg">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add-ons Section */}
      {(service as any).addOns && (
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 px-4 leading-tight">
              Add-Ons & Extras
            </h2>
            <div className="space-y-3 md:space-y-4">
              {(service as any).addOns.map((addon: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-card p-3.5 md:p-4 rounded-lg md:rounded-xl shadow-sm gap-4"
                >
                  <span className="font-medium text-sm sm:text-base">{addon.item}</span>
                  <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain-texture" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container-custom relative text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Ready to Book?</h2>
          <p className="text-lg sm:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact us today to discuss your event and get a personalized quote.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/contact")}
            className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceDetail
