import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import {
  Palette,
  Lightbulb,
  Settings,
  FileCheck,
  Users,
  Wrench,
} from 'lucide-react';
import servicesBg from '../assets/services-bg.jpg';
import sketchRef from '../assets/sketch ref.png';
import sketches13 from '../assets/sketches-13.png';

 const CIRCLE_RADIUS = 27;
const GAP = 8; // space between line and circle
const EXCLUDE = CIRCLE_RADIUS + GAP;
const services = [
  {
    icon: Palette,
    title: 'Design & Concept Development',
    description:
      'Where imagination meets functionality. Our design team crafts unique concepts that reflect each client\'s vision and brand identity.',
    features: [
      'Space planning and layout optimization',
      'Material selection and specification',
      '3D visualizations and renderings',
      'Detailed technical drawings',
      'Brand identity integration',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Interior Decoration & Finishing',
    description:
      'The art of the final touch. Our interior finishing and décor services add character and sophistication to every project.',
    features: [
      'Wall finishes and treatments',
      'Lighting design and implementation',
      'Furniture selection and custom pieces',
      'Fabrics and soft furnishings',
      'Art curation and accessories',
    ],
  },
  {
    icon: Settings,
    title: 'MEP & Technical Services',
    description:
      'Engineering comfort, safety, and reliability into every space with modern systems.',
    features: [
      'Mechanical systems (HVAC)',
      'Electrical design and installation',
      'Plumbing and drainage',
      'Fire safety systems',
      'Energy efficiency solutions',
    ],
  },
  {
    icon: FileCheck,
    title: 'Authority Approvals & Documentation',
    description:
      'Navigating approvals with efficiency and expertise for a seamless project lifecycle.',
    features: [
      'Dubai Municipality approvals',
      'Civil Defence certification',
      'DEWA coordination',
      'Landlord NOCs',
      'Permit management',
    ],
  },
  {
    icon: Users,
    title: 'Project Management & Supervision',
    description:
      'End-to-end project oversight ensuring quality, timeline, and budget adherence.',
    features: [
      'Project scheduling and planning',
      'Cost management',
      'Quality control',
      'Vendor coordination',
      'Progress reporting',
    ],
  },
  {
    icon: Wrench,
    title: 'Civil Works',
    description:
      'Comprehensive civil works including structural modifications and base building works.',
    features: [
      'Structural modifications',
      'Flooring installation',
      'Ceiling systems',
      'Partition walls',
      'Joinery and millwork',
    ],
  },
];

const ServicesPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const processRef = useRef<HTMLDivElement>(null);
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' });
  const [animationPhase, setAnimationPhase] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isProcessInView) {
      const interval = setInterval(() => {
        setAnimationPhase((prev) => {
          if (prev >= 9) {
            return 0; // Restart animation
          }
          return prev + 1;
        });
      }, 800); // Slower animation for premium feel
      
      return () => clearInterval(interval);
    }
  }, [isProcessInView]);

  // Calculate current step based on animation phase
  useEffect(() => {
    const step = Math.floor(animationPhase / 2);
    setCurrentStep(step > 4 ? 4 : step);
  }, [animationPhase]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBg}
            alt="Our Services"
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
            Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-white">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            className="text-center mb-16"
          >
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              What We Offer
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section mb-4">
              Comprehensive Interior{' '}
              <span className="text-primary">Solutions</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line mx-auto mb-6" />
            <motion.p variants={staggerItem} className="body-elegant max-w-2xl mx-auto">
              From concept to completion, we offer a full spectrum of interior
              design and fit-out services tailored to your unique vision and needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -10 }}
                className="card-new-hover golden-glow p-8 pb-12"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card mb-4 text-black">{service.title}</h3>
                <p className="body-elegant text-sm mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Process */}
      <section ref={processRef} className="section-padding bg-charcoal relative">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-elegant-light block mb-4"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="heading-section mb-4"
            >
              <span className="text-white">Project</span> <span className="text-black">Journey</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="gold-line mx-auto"
            />
          </div>

          <div className="relative">
            {/* Animated SVG Path */}
            <svg 
              className="absolute -top-[78px] left-0 right-0 h-51 z-0"
              viewBox="0 0 1000 160"
              preserveAspectRatio="none"
            >
              {/* Background line positioned below numbers */}
              <line
                x1="100"
                y1="80"
                x2="900"
                y2="80"
                stroke="hsl(0, 10%, 100%)"
                strokeWidth="1"
                opacity="0.2"
              />
      {[0, 1, 2, 3].map((index) => {
  const startX = 100 + index * 200 + EXCLUDE;
  const endX = 100 + (index + 1) * 200 - EXCLUDE;

  const isSegmentActive = currentStep > index;

  return (
    <motion.path
      key={index}
      d={`M ${startX},80 L ${endX},80`}
      stroke="hsl(0, 10%, 100%)"
      strokeWidth="3"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isProcessInView && isSegmentActive ? 1 : 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        filter: 'drop-shadow(0 0 12px hsla(0, 0%, 100%, 0.6))',
      }}
    />
  );
})}

              
              {[0, 1, 2, 3, 4].map((index) => {
                const x = 100 + (index * 200);
                const isActive = currentStep > index || (currentStep === index && animationPhase % 2 === 1);
                
                return (
                  <g key={index}>
                    {/* Circle background glow */}
                    {isActive && (
                      <motion.circle
                        cx={x}
                        cy="80"
                        r="27"
                        fill="hsl(0, 0%, 100%)"
                        fillOpacity="0.2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                    
                    {/* Main circle */}
                    <motion.circle
                      cx={x}
                      cy="80"
                      r="27"
                      stroke="hsl(0, 0%, 100%)"
                      strokeWidth="2.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ 
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        filter: isActive ? 'drop-shadow(0 0 20px hsla(0, 0%, 100%, 0.6))' : 'none',
                      }}
                    />
                    
                    {/* Inner decorative circle */}
                    {isActive && (
                      <motion.circle
                        cx={x}
                        cy="80"
                        r="27"
                        stroke="hsl(0, 0%, 100%)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            <div className="grid md:grid-cols-5 gap-6 relative z-10" style={{ marginTop: '3rem' }}>
              {[
                { step: '01', title: 'Consultation', desc: 'Initial meeting and brief' },
                { step: '02', title: 'Concept', desc: 'Design development' },
                { step: '03', title: 'Approval', desc: 'Authority permits' },
                { step: '04', title: 'Execution', desc: 'Fit-out works' },
                { step: '05', title: 'Handover', desc: 'Final delivery' },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-5xl font-display mb-4 relative"
                    style={{ marginTop: '-1rem' }}
                    animate={{
                      color: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? 'hsl(0, 0%, 0%)' 
                        : 'hsl(0, 0%, 40%)',
                      textShadow: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? '0 0 30px hsla(0, 0%, 0%, 0.5), 0 0 50px hsla(0, 0%, 0%, 0.3)' 
                        : 'none',
                      scale: (currentStep === index && animationPhase % 2 === 1) ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {phase.step}
                    {/* Glowing dot */}
                    {currentStep > index || (currentStep === index && animationPhase % 2 === 1) && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-3 h-3 bg-black rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        style={{
                          boxShadow: '0 0 15px hsla(0, 0%, 0%, 0.6)',
                        }}
                      />
                    )}
                  </motion.div>
                  <motion.h4 
                    className="font-display text-xl mb-2"
                    animate={{
                      color: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? 'hsl(0, 0%, 0%)' 
                        : 'hsl(0, 0%, 30%)',
                      textShadow: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? '0 0 25px hsla(0, 0%, 0%, 0.4), 0 0 40px hsla(0, 0%, 0%, 0.2)' 
                        : 'none',
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {phase.title}
                  </motion.h4>
                  <motion.p 
                    className="text-sm"
                    animate={{
                      color: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? 'hsl(0, 0%, 20%)' 
                        : 'hsl(0, 0%, 50%)',
                      textShadow: currentStep > index || (currentStep === index && animationPhase % 2 === 1) 
                        ? '0 0 20px hsla(0, 0%, 0%, 0.3), 0 0 35px hsla(0, 0%, 0%, 0.15)' 
                        : 'none',
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {phase.desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

 {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="heading-section mb-8 text-center"
            >
              Our <span className="text-primary">Expertise</span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                'Civil Works',
                'Joinery Fitout Works',
                'False Ceiling and Light Partition Installation',
                'Hardwood Floors',
                'Tiling Works, Carpet Flooring',
                'Modular Work Stations',
                'Fabric Panelling',
                'Marble, Corian, Quartz installations',
                'Glass and Aluminium work',
                'Kitchen Installations',
                'Steel Works',
                'Sanitary and Plumbing',
                'Ornamentation Works (CNC)',
                'Decorative Surfaces (Paint, Warps, Metal)',
                'Electrical, HVAC, Networking works',
                'Furniture selection as per your space'
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.02 }}
                  className="p-4 min-h-[80px] relative overflow-hidden group flex items-center border-2 border-primary/30 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  {/* Background Glow Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-5" />
                  
                  {/* Expertise Text with Arrow Icon */}
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/15 flex items-center justify-center border-2 border-primary/50 shadow-lg"
                      style={{
                        boxShadow: '0 0 20px hsla(35, 32%, 55%, 0.6), 0 0 40px hsla(35, 32%, 55%, 0.3)',
                      }}
                    >
                      <motion.span 
                        className="text-primary text-sm font-bold"
                        animate={{
                          textShadow: '0 0 10px hsla(35, 32%, 55%, 0.8)',
                        }}
                        whileHover={{
                          scale: 1.1,
                          textShadow: '0 0 20px hsla(35, 32%, 55%, 1)',
                        }}
                      >
                        ▲
                      </motion.span>
                    </motion.div>
                    
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        x: 5,
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                      className="text-sm font-medium text-gray-700 group-hover:text-primary transition-all duration-300"
                      style={{
                        textShadow: '0 0 10px hsla(35, 32%, 55%, 0.3)',
                      }}
                    >
                      {expertise}
                    </motion.span>
                  </div>

                  {/* Enhanced Hover Effect with Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
                  </div>

                  {/* Additional glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 25px hsla(35, 32%, 55%, 0.5), 0 0 50px hsla(35, 32%, 55%, 0.2), inset 0 0 15px hsla(35, 32%, 55%, 0.1)',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

      {/* Project Journey: From First Idea to Final Handover */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="label-elegant block mb-4 text-primary"
              >
                Our Process
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="heading-section mb-6"
              >
                Project Journey: <span className="text-primary">From First Idea to Final Handover</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="gold-line mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="body-elegant mb-6"
              >
                Every successful project begins with a vision and ends with a masterpiece. Our comprehensive journey ensures your dreams are transformed into reality with precision, creativity, and unwavering attention to detail.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                {[
                  'Initial concept development and creative brainstorming',
                  'Detailed design documentation and technical specifications',
                  'Material selection and procurement management',
                  'Quality-controlled execution and project management',
                  'Final handover with comprehensive documentation'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 golden-glow">
                <img
                  src={sketchRef}
                  alt="Project Journey Sketch"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Second Image Content Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={sketches13}
                  alt="Design Process"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="label-elegant-light block mb-4 text-black"
              >
                Design Excellence
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="heading-section mb-6 text-white"
              >
                Where <span className="text-black">Creativity</span> Meets <span className="text-primary">Precision</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="gold-line mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="body-elegant mb-6 text-white/90"
              >
                Our design philosophy blends artistic vision with technical expertise. We create spaces that not only look stunning but also function flawlessly, ensuring every detail serves a purpose and enhances the overall experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 gap-4 "
              >
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '50+', label: 'Design Awards' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 bg-black/5 backdrop-blur-sm rounded-lg border border-white/20 hover:golden-glow"
                  >
                    <div className="text-2xl font-bold text-white/50 mb-1">{stat.number}</div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
