import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { ArrowUpRight } from 'lucide-react';
import { PremiumLightbox } from '@/components/ui/premium-lightbox';
import Corporate_headquarter from '../assets/Corporate_headquarter1.png';
import fashion_store from '../assets/fashion_store.jpg';
import luxury_villa from '../assets/luxury_villa.png';
import penthouse_apartment from '../assets/penthouse_apartment.png';
import restraurant from '../assets/restraurant.jpg';
import portfolio from '../assets/portfolio-bg.png';
import wellness_spa from '../assets/wellness_spa.jpg';
const categories = [
  'All',
  'Residential',
  'Commercial',
  'F&B',
  'Retail',
  'Healthcare',
];

const projects = [
  {
    id: 1,
    title: 'Luxury Apartment',
    category: 'Residential',
    image: luxury_villa,
    description: 'A contemporary 6-bedroom villa with panoramic views.',
    area: '12,000 sq.ft',
    location: 'Palm Jumeirah, Dubai',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: Corporate_headquarter,
    description: 'Modern office space fostering creativity and collaboration.',
    area: '25,000 sq.ft',
    location: 'DIFC, Dubai',
  },
  {
    id: 3,
    title: 'Fine Dining Restaurant',
    category: 'F&B',
    image: restraurant,
    description: 'An immersive dining experience through thoughtful design.',
    area: '4,500 sq.ft',
    location: 'Downtown Dubai',
  },
  {
    id: 4,
    title: 'Boutique Fashion Store',
    category: 'Retail',
    image: fashion_store,
    description: 'Elegant retail space for luxury fashion brand.',
    area: '2,800 sq.ft',
    location: 'Dubai Mall',
  },
  {
    id: 5,
    title: 'Wellness Spa & Clinic',
    category: 'Healthcare',
    image: wellness_spa,
    description: 'Serene healthcare environment promoting wellbeing.',
    area: '8,000 sq.ft',
    location: 'Jumeirah, Dubai',
  },
  {
    id: 6,
    title: 'Luxury Apartment in Downtown Dubai',
    category: 'Residential',
    image: penthouse_apartment,
    description: 'Luxurious penthouse with bespoke interiors.',
    area: '6,500 sq.ft',
    location: 'Business Bay, Dubai',
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={portfolio}
            alt="Portfolio"
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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero text-white"
          >
            <span className="text-white">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="body-elegant">
              At OneCoreX, we specialize in delivering comprehensive interior
              turnkey solutions across some of the most dynamic, design-driven, and
              experience-focused sectors. Our portfolio showcases our expertise in
              High-end Luxury Villas, Retail Spaces, F&B, Commercial Offices,
              Entertainment Spaces, and Healthcare & Wellness facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-charcoal top-20 z-30 border-y border-border">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setLightboxImage({ src: project.image, alt: project.title })}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer golden-glow premium-shimmer"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                    filter: hoveredId === project.id ? 'blur(4px)' : 'blur(0px)',
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover golden-glow"
                  />
                </motion.div>

                <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-60'}`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span className="label-elegant block mb-1 text-white/90">
                    {project.category}
                  </span>
                  <div className="gold-line mb-3 w-12" />
                  <h3 className="heading-card mb-2 text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex gap-4 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>

                  {/* Premium Golden Arrow Button - Top Right */}
                  <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage({ src: project.image, alt: project.title });
                  }}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 cursor-pointer z-20 transition-all duration-300 hover:bg-primary/30 hover:border-primary"
                  animate={{
                    scale: hoveredId === project.id ? 1 : 0,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: '0 0 30px hsla(35, 32%, 55%, 0.6)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 20px hsla(35, 32%, 55%, 0.4), inset 0 0 20px hsla(35, 35%, 70%, 0.2)',
                  }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white hover:text-primary" />
                </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Premium Lightbox */}
      <PremiumLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
      />
    </Layout>
  );
};

export default PortfolioPage;
