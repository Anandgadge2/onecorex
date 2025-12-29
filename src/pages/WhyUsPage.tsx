import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import {
  Layers,
  Target,
  Sparkles,
  Users,
  Globe,
  Cpu,
} from 'lucide-react';
import whyUsBg from '../assets/why-us-bg.jpg';

const differentiators = [
  {
    icon: Layers,
    title: 'Integrated Design + Build Approach',
    description:
      'This integration reduces cost overruns, shortens delivery times, and preserves the creative vision from start to finish.',
  },
  {
    icon: Target,
    title: 'Precision Without Excess',
    description:
      'We maintain a lean, intelligent structure - no unnecessary overhead, no inflated mark-ups - allowing us to deliver superior results at exceptional value.',
  },
  {
    icon: Sparkles,
    title: 'Crafted for Performance',
    description:
      'Our designs go beyond aesthetics. We focus on how a space feels, functions, and flows - creating environments that work beautifully.',
  },
  {
    icon: Users,
    title: 'Transparent & Collaborative',
    description:
      'We believe in open communication & accountability. Every project milestone, material choice, and cost breakdown is shared clearly with our clients.',
  },
  {
    icon: Globe,
    title: 'Local Insight, Global Perspective',
    description:
      'Based in Dubai, we blend international design standards with local expertise, ensuring our projects meet both creative ambition and regulatory precision.',
  },
  {
    icon: Cpu,
    title: 'Technology at the Core',
    description:
      'From 3D visualizations to digital project tracking, we employ smart tools that bring clarity, control, and confidence to every stage of the project.',
  },
];

const WhyUsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={whyUsBg}
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="label-elegant block mb-4"
          >
            Our Advantage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-white">Why</span> <span className="text-primary">Choose Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">
              Where Ideas Become{' '}
              <span className="text-primary">Built Realities</span>
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-elegant mb-6">
              At OneCoreX, we turn ideas into spaces that speak. Every environment
              we design is built around a clear purpose — to inspire, perform, and
              reflect the essence of the people and brands it represents.
            </p>
            <p className="body-elegant">
              We combine design intuition with engineering, ensuring that every
              detail - from concept sketches to final handover — is executed with
              precision and care. Our work is defined by clarity, craftsmanship,
              and commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              How We're Different
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section mb-4">
              <span className="text-white">Our</span> <span className="text-primary">Differentiators</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-new-hover golden-glow p-8 pb-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card mb-4 text-black">{item.title}</h3>
                <p className="body-elegant text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Service Metrics & Data Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="label-elegant block mb-4 text-primary"
            >
              Our Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="heading-section mb-6"
            >
              <span className="text-primary">Proven</span> Results & <span className="text-primary">Premium</span> Quality
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="gold-line mb-12"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="body-elegant max-w-3xl mx-auto mb-12"
            >
              Our commitment to excellence is reflected in every project we undertake. 
              We combine innovative design solutions with meticulous attention to detail, 
              ensuring spaces that not only look stunning but also function flawlessly.
            </motion.p>
          </motion.div>

          {/* Data Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                number: '1000+',
                label: 'Projects Completed',
                description: 'Successfully delivered projects across residential, commercial, and retail sectors'
              },
              {
                number: '15+',
                label: 'Years Experience',
                description: 'Decades of combined expertise in interior design and fit-out solutions'
              },
              {
                number: '98%',
                label: 'Client Satisfaction',
                description: 'Consistently exceeding client expectations with exceptional service'
              },
              {
                number: '50+',
                label: 'Design Awards',
                description: 'Recognition for innovative and sustainable design solutions'
              },
              {
                number: '24/7',
                label: 'Support Available',
                description: 'Dedicated customer support throughout your project journey'
              },
              {
                number: '100%',
                label: 'Quality Assurance',
                description: 'Rigorous quality control processes ensuring perfect execution'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="card-new-hover golden-glow p-6 pb-10 min-h-[270px] relative overflow-hidden group"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-5" />
                
                {/* Number with enhanced glow effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-4xl font-bold text-primary mb-4 text-center"
                  style={{
                    textShadow: '0 0 20px hsla(35, 32%, 55%, 0.8), 0 0 40px hsla(35, 32%, 55%, 0.4)',
                  }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="heading-card text-black mb-3 group-hover:text-primary transition-colors duration-300 text-center"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="body-elegant text-sm text-gray-600 leading-relaxed text-center"
                >
                  {stat.description}
                </motion.p>

                {/* Enhanced Hover Effect with Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
                </div>

                {/* Additional glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px hsla(35, 32%, 55%, 0.6), 0 0 60px hsla(35, 32%, 55%, 0.3), inset 0 0 20px hsla(35, 32%, 55%, 0.1)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
       
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-8xl text-primary/20 font-display mb-4">"</div>
            <blockquote className="font-display text-3xl md:text-4xl italic leading-relaxed mb-6">
              At OneCoreX, design and implementation are not two stages —{' '}
              <span className="text-primary">
                they're one seamless experience.
              </span>
            </blockquote>
            <div className="gold-line mx-auto" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUsPage;
