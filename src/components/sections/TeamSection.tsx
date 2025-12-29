import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import sachin from '../../assets/sachin.jpg';

export const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={sachin}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span variants={staggerItem} className="label-elegant block mb-4">
            Our Leadership
          </motion.span>
          <motion.h2 variants={staggerItem} className="heading-section mb-6">
            The Fusion of{' '}
            <span className="text-primary">Art & Engineering</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="gold-line mx-auto mb-8" />
          <motion.p variants={staggerItem} className="body-elegant mb-8">
            At the heart of OneCoreX is a partnership built on balance - where
            design imagination meets engineering precision. Our two founding
            partners bring together decades of expertise across design, fit-out,
            and project management.
          </motion.p>
          <motion.p variants={staggerItem} className="body-elegant mb-10">
            An Interior Designer with a keen eye for detail and composition, and a
            Civil Engineer with Masters in Project & Construction Management.
            Together, they balance creativity and practicality, ensuring that each
            design concept is not only inspiring but also technically sound.
          </motion.p>

          <motion.blockquote
            variants={staggerItem}
            className="relative mb-10"
          >
            <div className="text-6xl text-primary/20 absolute -top-6 left-1/2 -translate-x-1/2 font-display">
              "
            </div>
            <p className="font-display text-2xl italic text-foreground px-8">
              Two perspectives. One shared purpose -{' '}
              <span className="text-primary">
                Creating spaces with depth, detail, and distinction.
              </span>
            </p>
          </motion.blockquote>

          <motion.div variants={staggerItem}>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/about" className="group">
                Meet Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
