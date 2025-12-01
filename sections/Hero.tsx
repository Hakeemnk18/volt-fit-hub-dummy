import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-primary/20 dark:from-black/95 dark:via-black/80 dark:to-primary/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-dark-900 opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase leading-tight"
          >
            Unleash Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Power</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-neutral-200 mb-10 font-light max-w-2xl mx-auto md:mx-0"
          >
            Modern equipment. Expert trainers. Designed to ignite your strength and transform your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Button className="w-full md:w-auto text-lg">
              Join Now <ChevronRight size={20} />
            </Button>
            <a href="#plans" className='w-full md:w-auto'>
              <Button variant="outline" className="w-full md:w-auto text-lg border-white text-white hover:bg-white hover:text-black hover:border-white">
                View Plans
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 right-0 w-1/2 h-full bg-primary skew-x-12 translate-x-1/3 pointer-events-none"
      />
    </section>
  );
};

export default Hero;