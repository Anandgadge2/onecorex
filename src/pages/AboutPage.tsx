import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import visionBg from '../assets/vision-bg.jpg';
import sachinImg from "@/assets/sachin.jpg";      
import vedanginiImg from "@/assets/vedangini.jpg";


const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={visionBg}
            alt="About OneCoreX"
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-white">Our</span> <span className="text-primary">Story</span>
          </motion.h1>
        </div>
      </section>

      {/* Purpose Section */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span variants={staggerItem} className="label-elegant block mb-4">
                Our Purpose
              </motion.span>
              <motion.h2 variants={staggerItem} className="heading-section mb-6">
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
              <motion.p variants={staggerItem} className="body-elegant mb-6">
                Our residential interiors reflect the soul of the inhabitants - warm,
                expressive, and deeply personal. Our commercial spaces are designed to
                energize, motivate, and inspire collaboration.
              </motion.p>
              <motion.p variants={staggerItem} className="body-elegant">
                At OneCoreX, design is not a surface treatment - it's a human
                experience. Every color, texture, and form is carefully curated to
                evoke emotion and enhance the way you live and work.
              </motion.p>
            </div>
            <div className="flex flex-col items-center space-y-10">
  {/* Sachin */}
  <motion.div 
    className="flex flex-col items-center text-center group cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
  <div className="p-3 rounded-[28px] overflow-hidden border-2 border-primary hover:golden-glow">
    <motion.img
      src={sachinImg}
      alt="Sachin Wagh"
      className="w-[280px] h-[360px] object-cover rounded-[20px] transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </div>

  <motion.h3 
    className="mt-4 text-2xl font-medium text-secondary transition-colors duration-300 group-hover:text-primary"
  >
    Sachin Wagh
  </motion.h3>

  <motion.p 
    className="mt-1 text-base text-primary transition-colors duration-300 group-hover:text-primary/80"
  >
    Founder & Managing Director
  </motion.p>
</motion.div>


  {/* Vedangini */}
  <motion.div 
    className="flex flex-col items-center text-center group cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
  <div className="p-3 rounded-[28px] overflow-hidden border-2 border-primary hover:golden-glow">
    <motion.img
      src={vedanginiImg}
      alt="Vedangini Wagh"
      className="w-[280px] h-[360px] object-cover rounded-[20px] transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </div>

  <motion.h3 
    className="mt-4 text-2xl font-medium text-secondary transition-colors duration-300 group-hover:text-primary"
  >
    Vedangini Wagh
  </motion.h3>

  <motion.p 
    className="mt-1 text-base text-primary transition-colors duration-300 group-hover:text-primary/80"
  >
    Co-Founder & Creative Director
  </motion.p>
</motion.div>

</div>


          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-new-hover golden-glow p-10 pb-14"
            >
              <span className="label-elegant block mb-4 text-primary">Our Vision</span>
              <div className="gold-line mb-6" />
              <p className="body-elegant text-gray-600">
                To create spaces through craftsmanship, creativity, and precision -
                transforming every space into a reflection of excellence, luxury and
                timeless design elevating lifestyle and inspire success across every
                project we deliver.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-new-hover golden-glow p-10 pb-14 "
            >
              <span className="label-elegant block mb-4 text-primary">Our Mission</span>
              <div className="gold-line mb-6" />
              <p className="body-elegant text-gray-600">
                We aim to create meaningful and memorable environments by integrating
                innovative design, technical expertise, and uncompromising
                craftsmanship—ensuring every space we deliver elevates the user
                experience and adds lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-elegant block mb-4"
            >
              Leadership Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="heading-section mb-4"
            >
              The Fusion of <span className="text-primary">Art & Engineering</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="gold-line mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="body-elegant mb-8">
              At the heart of OneCoreX is a partnership built on balance - where
              design imagination meets engineering precision. Our two founding
              partners bring together decades of expertise across design, fit-out,
              and project management.
            </p>
            <p className="body-elegant mb-8">
              Together, they represent the perfect fusion of Art and Engineering -
              turning ambitious ideas into enduring, built realities. An Interior
              Designer with a keen eye for detail and composition, and a Civil
              Engineer with Masters in Project & Construction Management.
            </p>
            <p className="body-elegant mb-10">
              Their combined expertise into residential, commercial, hospitality,
              retail, entertainment, and mixed used giga projects by renowned
              developers in UAE allows OneCoreX to offer design-driven fit-outs that
              are visually refined, structurally robust, and delivered with
              exceptional professionalism.
            </p>
            <blockquote className="border-l-2 border-primary pl-8 text-left mb-16">
              <p className="font-display text-2xl italic">
                "Two perspectives. One shared purpose -{' '}
                <span className="text-primary">
                  Creating spaces with depth, detail, and distinction.
                </span>"
              </p>
            </blockquote>
          </motion.div>

          {/* Team Members */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto"
>
  {/* Sachin Wagh */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="flex flex-col items-center text-center group cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-3 rounded-2xl border-2 border-primary">
      <div className="w-[280px] h-[360px] overflow-hidden rounded-xl">
        <motion.img
  src={sachinImg}
  alt="Sachin Wagh"
  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
/>
      </div>
    </div>

    <motion.h3 
      className="heading-card mt-6 text-secondary transition-colors duration-300 group-hover:text-primary"
    >
      Sachin Wagh
    </motion.h3>

    <motion.p 
      className="text-primary font-body text-sm uppercase tracking-wider mt-1 transition-colors duration-300 group-hover:text-primary/80"
    >
      Founder & Managing Director
    </motion.p>
  </motion.div>

  {/* Vedangini Wagh */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="flex flex-col items-center text-center group cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-3 rounded-2xl border-2 border-primary">
      <div className="w-[280px] h-[360px] rounded-xl overflow-hidden">
        <motion.img
  src={vedanginiImg}
  alt="Vedangini Wagh"
  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
/>

      </div>
    </div>

    <motion.h3 
      className="heading-card mt-6 text-secondary transition-colors duration-300 group-hover:text-primary"
    >
      Vedangini Wagh
    </motion.h3>

    <motion.p 
      className="text-primary font-body text-sm uppercase tracking-wider mt-1 transition-colors duration-300 group-hover:text-primary/80"
    >
      Co-Founder & Creative Director
    </motion.p>
  </motion.div>
</motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
