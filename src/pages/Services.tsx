"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import { useNavigate } from "react-router-dom"
import { siteData } from "@/data/siteData"

const Services = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 grain-texture" />
        <div className="relative z-10 text-center text-primary-foreground container-custom px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-up leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Comprehensive event solutions for every occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4">
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you're planning a corporate conference, dream wedding, or special celebration, our experienced
              team provides everything you need to make your event extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {siteData.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.name}
                description={service.description}
                image={service.image}
                icon={service.icon}
                buttonText={service.button}
                onButtonClick={() => navigate(`/services/${service.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in-up px-4 leading-tight">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteData.features.map((feature, index) => (
              <div key={index} className="bg-card p-5 md:p-6 rounded-2xl shadow-md hover-lift animate-fade-in">
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain-texture" />
        <div className="container-custom relative text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight">
            Let's Plan Your Event
          </h2>
          <p className="text-lg sm:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact us today for a personalized consultation and quote.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 h-12 sm:h-14 rounded-lg text-base sm:text-lg font-semibold bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
