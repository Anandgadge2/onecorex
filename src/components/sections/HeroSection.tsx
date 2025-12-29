// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import heroImage from '../../assets/hero-luxury.jpg';


// export const HeroSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start'],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen min-h-[700px] overflow-hidden"
//     >
//       {/* Background Image with Parallax */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{ y }}
//       >
//         <img
//           src={heroImage}
//           alt="Luxury Interior Design"
//           className="w-full h-full object-cover scale-110"
//         />
//          {/* Soft translucent shade */}
//          <div className="absolute inset-0 bg-gradient-hero" />
//         <div className="absolute inset-0 bg-background/5" />


//       </motion.div>

//       {/* Content */}
//       <motion.div
//   className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
//   style={{ opacity }}
// >
//   <span className="label-elegant mt-1 text-white/80">
//     Interior Design Excellence
//   </span>

//   <motion.h1 className="heading-hero text-white mb-3">
//     <motion.span 
//       className="block"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//     >
//       {['D', 'e', 's', 'i', 'g', 'n', '.'].map((letter, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
//           style={{ display: 'inline-block' }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </motion.span>
//     <motion.span 
//       className="block text-primary"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.6 }}
//     >
//       {['D', 'e', 'l', 'i', 'v', 'e', 'r', '.'].map((letter, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
//           style={{ display: 'inline-block' }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </motion.span>
//     <motion.span 
//       className="block"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 1.0 }}
//     >
//       {['D', 'a', 'z', 'z', 'l', 'e', '.'].map((letter, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
//           style={{ display: 'inline-block' }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </motion.span>
//   </motion.h1>

//   <motion.p className="body-large max-w-2xl text-white/90 mb-10">
//     Crafting spaces that inspire. We blend creativity with engineering
//     precision to create meaningful experiences.
//   </motion.p>


//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <Button variant="hero" size="xl" asChild>
//             <Link to="/portfolio">View Our Work</Link>
//           </Button>
//           <Button variant="hero-outline" size="xl" asChild>
//             <Link to="/contact">Start Your Project</Link>
//           </Button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
//             className="flex flex-col items-center gap-2 text-muted-foreground"
//           >
//             <span className="text-xs uppercase tracking-widest">Scroll</span>
//             <ChevronDown size={20} />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };



////////////////////////////////////////////////////////////////////////////
import { motion, useScroll, useTransform, Variants, Easing } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '../../assets/hero-luxury.jpg';

/* =====================================================
   Motion tokens (TypeScript safe)
===================================================== */

const easePremium: Easing = [0.22, 1, 0.36, 1];
const linearEase: Easing = [0, 0, 1, 1];

const letterContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const letterAnimation: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.04,
      ease: linearEase,
    },
  },
};

const renderText = (text: string) =>
  text.split('').map((char, i) => (
    <motion.span
      key={i}
      variants={letterAnimation}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));

/* =====================================================
   Component
===================================================== */

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src={heroImage}
          alt="Luxury Interior Design"
          className="w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/5" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        style={{ opacity }}
      >
        {/* Label */}
        <motion.span
          className="label-elegant mt-1 text-white/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easePremium }}
        >
          Interior Design Excellence
        </motion.span>

        {/* Hero Heading */}
        <motion.h1
          className="heading-hero text-white mb-3"
          initial="initial"
          animate="animate"
        >
          <motion.span
            className="block"
            variants={letterContainer}
            transition={{ delayChildren: 0.2 }}
          >
            {renderText('Design.')}
          </motion.span>

          <motion.span
            className="block text-primary"
            variants={letterContainer}
            transition={{ delayChildren: 0.6 }}
          >
            {renderText('Deliver.')}
          </motion.span>

          <motion.span
            className="block"
            variants={letterContainer}
            transition={{ delayChildren: 1.0 }}
          >
            {renderText('Dazzle.')}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="body-large max-w-2xl text-white/90 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: easePremium }}
        >
          Crafting spaces that inspire. We blend creativity with engineering
          precision to create meaningful experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: easePremium }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/portfolio">View Our Work</Link>
          </Button>

          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: easePremium,
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll
            </span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
