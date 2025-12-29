import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/lib/motion';

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.span
              variants={staggerItem}
              className="label-elegant block mb-4"
            >
              About OneCoreX
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="heading-section mb-6"
            >
              Crafting Spaces,{' '}
              <span className="text-primary">Curating</span> Luxury Living
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line-lg mb-8" />
            <motion.p variants={staggerItem} className="body-elegant mb-6">
              At OneCoreX, we believe great design is not merely about creating
              spaces – it is about curating meaningful experiences. Every home and
              workplace we deliver is crafted to make people feel calm, inspired,
              and connected.
            </motion.p>
            <motion.p variants={staggerItem} className="body-elegant mb-8">
              We blend creativity with engineering precision to create experiences
              that balance beauty, purpose, and performance. Our residential
              interiors reflect the soul of the inhabitants - warm, expressive, and
              deeply personal.
            </motion.p>
            <motion.blockquote
              variants={staggerItem}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <p className="font-display text-xl italic text-foreground">
                "We don't just design spaces.{' '}
                <span className="text-primary">We create stories you can live in.</span>"
              </p>
            </motion.blockquote>
          </div>

          {/* Right Stats */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '200+', label: 'Projects Delivered' },
              { number: '50+', label: 'Expert Professionals' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="card-new-hover golden-glow p-8 pb-12 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="heading-display text-primary block mb-2">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-wider text-gray-600">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
