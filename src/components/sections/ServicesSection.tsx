import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Lightbulb, Settings, FileCheck, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import servicesBg from '../../assets/services-bg.jpg';

const services = [
  {
    icon: Palette,
    title: 'Design & Concept Development',
    description:
      'From space planning and material selection to 3D visualizations, we create spaces that are both beautiful and purposeful.',
  },
  {
    icon: Lightbulb,
    title: 'Interior Decoration & Finishing',
    description:
      'Our interior finishing and décor services add character and sophistication from lighting design to furniture curation.',
  },
  {
    icon: Settings,
    title: 'MEP & Technical Services',
    description:
      'Complete mechanical, electrical, and plumbing works ensuring energy efficiency, comfort, and compliance.',
  },
  {
    icon: FileCheck,
    title: 'Authority Approvals',
    description:
      'We handle all statutory requirements - Dubai Municipality, Civil Defence, DEWA - ensuring seamless project lifecycle.',
  },
];

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="text-center mb-16"
        >
          <motion.span variants={staggerItem} className="label-elegant block mb-4">
            Our Offerings
          </motion.span>
          <motion.h2 variants={staggerItem} className="heading-section mb-4 text-black/60">
            Comprehensive <span className="text-primary">Interior Solutions</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="gold-line mx-auto mb-6" />
          <motion.p variants={staggerItem} className="body-elegant max-w-2xl mx-auto">
            We offer end-to-end interior design and fit-out services, ensuring
            every aspect of your project is handled with expertise and care.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="card-new-hover golden-glow p-8 pb-12 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card mb-4 text-black">
                {service.title}
              </h3>
              <p className="body-elegant text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="elegant" size="lg" asChild>
            <Link to="/services" className="group">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
