import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { FACILITIES } from '../constants';

// GLOBAL VARIANTS FOR SMOOTH ANIMATION
const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
      duration: 0.6,
    }
  }
};

const Facilities: React.FC = () => {
  return (
    <section 
      id="facilities" 
      className="py-24 bg-neutral-50 dark:bg-dark-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
            className="text-4xl md:text-6xl font-heading font-bold text-dark-900 dark:text-white mb-4"
          >
            World Class <span className="text-primary">Facilities</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>


        {/* GRID WITH STAGGER */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.12,
          }}
        >
          {FACILITIES.map((item) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ 
                  y: -6,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 120, damping: 12 }
                }}
                className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg border-b-4 border-transparent hover:border-primary transition-all duration-300 flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="w-16 h-16 bg-neutral-100 dark:bg-dark-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300"
                >
                  <IconComponent className="w-8 h-8 text-dark-900 dark:text-white group-hover:text-white transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg font-bold text-dark-900 dark:text-white font-heading uppercase tracking-wide">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
