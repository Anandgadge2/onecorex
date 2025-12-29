import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import contactBg from '../../assets/contact-bg.jpg';

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="max-w-3xl"
        >
          <motion.span variants={staggerItem} className="label-elegant block mb-4">
            Start Your Journey
          </motion.span>
          <motion.h2 variants={staggerItem} className="heading-section mb-6">
            Let's Create a Space That{' '}
            <span className="text-primary">Tells Your Story</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="gold-line-lg mb-8" />
          <motion.p variants={staggerItem} className="body-elegant mb-10">
            Ready to transform your space? Whether you're planning a residential
            project, commercial fit-out, or simply exploring possibilities, we're
            here to help bring your vision to life.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <a
                href="https://wa.me/971525315971?text=Hello%20OneCoreX%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <MessageCircle className="mr-2 w-5 h-5 text-black/60" />
               <span className="text-black/60">WhatsApp Us</span>
              </a>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <a href="tel:+971525315971" className="group">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
