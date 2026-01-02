import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';
import full_blue_logo from '../../assets/full_blue_logo.png';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Why Choose Us', path: '/why-us' },
  ],
  services: [
    { name: 'Design & Concept', path: '/services' },
    { name: 'Interior Finishing', path: '/services' },
    { name: 'MEP Services', path: '/services' },
    { name: 'Project Management', path: '/services' },
  ],
};

const socialLinks = [
  { 
    icon: MessageCircle, 
    href: 'https://wa.me/971525315971?text=Hello%20OneCoreX%2C%20I%20would%20like%20to%20discuss%20a%20project', 
    label: 'WhatsApp' 
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/onecorex01?igsh=d2QzdHc5dHl3eHZx&utm_source=ig_contact_invite', 
    label: 'Instagram' 
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/onecorex', 
    label: 'LinkedIn' 
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border relative overflow-hidden">
      {/* Overlay to hide any background patterns */}
      <div className="absolute inset-0 bg-primary z-0" />
      {/* Main Footer */}
      <div className="container-luxury section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={full_blue_logo} alt="OneCoreX" className="h-12 w-auto invert brightness-0" />
            </Link>
            <p className="text-base md:text-lg font-light leading-relaxed text-white mb-6 hover:text-black/50 transition-colors">
              Crafting spaces that inspire. We blend creativity with engineering
              precision to create meaningful experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:text-black/50 hover:border-black/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="label-elegant mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-black/50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="label-elegant mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-black/50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="label-elegant mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+971525315971"
                  className="flex items-start gap-3 text-white hover:text-black/50 transition-colors"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>+971 52 531 5971</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@onecorex.ae"
                  className="flex items-start gap-3 text-white hover:text-black/50 transition-colors"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span>info@onecorex.ae</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white hover:text-black/50 transition-colors">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>
                    First Floor, Princess Cars Building,
                    <br />
                    Near Oasis Mall, Sheikh Zayed Road,
                    <br />
                    Dubai, UAE
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border relative z-10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} OneCoreX Design and Implementation LLC. All rights reserved.
            </p>
            <p className="text-sm text-white">
              <span className="text-white font-semibold">Design.</span>{' '}
              <span className="text-white font-semibold">Deliver.</span>{' '}
              <span className="text-white font-semibold">Dazzle.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
