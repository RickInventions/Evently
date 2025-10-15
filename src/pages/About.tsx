"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"
import { siteData } from "@/data/siteData"

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
          style={{ backgroundImage: `url(${siteData.about.image})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 grain-texture" />
        <div className="relative z-10 text-center text-primary-foreground container-custom px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-up leading-tight">
            Who We Are
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Creating unforgettable moments since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container-custom max-w-4xl relative px-4">
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4 md:mb-6">
              {siteData.about.story}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              <strong className="text-foreground">Our Mission:</strong> {siteData.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {siteData.about.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-card/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in-up px-4 leading-tight">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {siteData.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-md hover-lift animate-fade-in border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="container-custom relative">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">Meet Our Team</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The talented individuals behind your unforgettable events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {siteData.team.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3 md:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain-texture" />
        <div className="container-custom relative text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Ready to bring your event vision to life?
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/contact")}
            className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
