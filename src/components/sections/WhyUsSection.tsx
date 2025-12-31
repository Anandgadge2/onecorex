import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import whyUsBg from '../../assets/why-us-bg.jpg';
import icon1 from '../../assets/1.png';
import icon2 from '../../assets/2.png';
import icon3 from '../../assets/3.png';
import icon4 from '../../assets/4.png';
import icon5 from '../../assets/5.png';
import icon6 from '../../assets/6.png';

const differentiators = [
  {
    title: 'Integrated Design + Build',
    description:
      'Reduces cost overruns, shortens delivery times, and preserves creative vision from start to finish.',
    icon: icon1,
  },
  {
    title: 'Precision Without Excess',
    description:
      'Lean, intelligent structure with no unnecessary overhead or inflated mark-ups.',
    icon: icon2,
  },
  {
    title: 'Crafted for Performance',
    description:
      'We focus on how a space feels, functions, and flows - creating environments that work beautifully.',
    icon: icon3,
  },
  {
    title: 'Transparent & Collaborative',
    description:
      'Every milestone, material choice, and cost breakdown is shared clearly with our clients.',
    icon: icon4,
  },
  {
    title: 'Local Insight, Global Perspective',
    description:
      'International design standards blended with local expertise for regulatory precision.',
    icon: icon5,
  },
  {
    title: 'Technology at the Core',
    description:
      'From 3D visualizations to digital project tracking - clarity, control, and confidence.',
    icon: icon6,
  },
];

export const WhyUsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <img
          src={whyUsBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
          >
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section mb-6">
              Where Ideas Become{' '}
              <span className="text-primary">Built Realities</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line-lg mb-8" />
            <motion.p variants={staggerItem} className="body-elegant mb-8">
              At OneCoreX, we turn ideas into spaces that speak. Every environment
              we design is built around a clear purpose — to inspire, perform, and
              reflect the essence of the people and brands it represents.
            </motion.p>
            <motion.p variants={staggerItem} className="body-elegant mb-10">
              We combine design intuition with engineering, ensuring every detail
              from concept sketches to final handover is executed with precision.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/why-us" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Differentiators */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            className="grid sm:grid-cols-2 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
                
                className=" gap-4 p-4 rounded-lg  card-new-hover golden-glow pb-12 text-center"
              >
                <div className="flex-shrink-0 flex justify-center mb-4">
                  <img src={item.icon} alt="" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
