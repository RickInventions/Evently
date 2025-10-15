import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">{siteData.name}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating unforgettable moments in elegant spaces. Where
              celebration meets sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteData.navigation.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <span className="text-primary-foreground/80">
                  {siteData.contact.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary" />
                <span className="text-primary-foreground/80">
                  {siteData.contact.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span className="text-primary-foreground/80">
                  {siteData.contact.address}
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {siteData.socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} {siteData.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
