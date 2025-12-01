import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Strength training & functional fitness",
    "Expert trainers with proven results",
    "Modern, high-tech equipment",
    "Supportive community atmosphere"
  ];

  return (
    <section
      id="about"
      className="py-28 bg-neutral-50 dark:bg-dark-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                alt="Gym Interior"
                className="w-full h-full object-cover"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* FLOATING STAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-7 -right-7 bg-white dark:bg-dark-900 p-6 rounded-2xl shadow-xl border-l-4 border-primary hidden md:block"
            >
              <p className="text-4xl font-heading font-bold text-primary leading-none">
                500+
              </p>
              <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                Active Members
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-dark-900 dark:text-white">
              Built for <span className="text-primary">Real Results</span>
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed">
              Volt Fit Hub is designed for those who take fitness seriously. 
              With premium equipment, expert mentors, and an energetic atmosphere, 
              our space helps you push past limits and achieve the transformation you dream of.
            </p>

            <ul className="space-y-5">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="text-lg text-dark-800 dark:text-neutral-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
