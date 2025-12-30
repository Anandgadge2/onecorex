import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../assets/logo.png';
import logoG from '../../assets/logoG.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <motion.img
                src={logo}
                alt="OneCoreX"
                className={`h-12 md:h-14 w-auto transition-all duration-500 ease-smooth ${
                  isScrolled ? 'opacity-0 absolute' : 'opacity-100 relative'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.img
                src={logoG}
                alt="OneCoreX"
                className={`h-12 md:h-14 w-auto transition-all duration-500 ease-smooth ${
                  isScrolled ? 'opacity-100 relative brightness-100 drop-shadow-md' : 'opacity-0 absolute'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <span
                    className={`font-body text-sm tracking-wider transition-colors duration-300 ease-smooth ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-foreground/80 hover:text-foreground'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+971525315971"
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ease-smooth ${
                  isScrolled
                    ? 'text-muted-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone size={16} />
                <span className="font-body">+971 52 531 5971</span>
              </a>
              <Button variant="hero" size="default" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-background/95 backdrop-blur-2xl border-l border-primary/20 p-8 pt-24 shadow-gold"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-2xl transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href="tel:+971525315971"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors mb-4"
                  >
                    <Phone size={18} />
                    <span>+971 52 531 5971</span>
                  </a>
                  <a
                    href="mailto:info@onecorex.ae"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={18} />
                    <span>info@onecorex.ae</span>
                  </a>
                </div>

                <Button variant="hero" size="lg" className="mt-6" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
