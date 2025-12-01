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
    <section id="about" className="py-24 bg-neutral-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Gym Interior" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-900 p-6 rounded-xl shadow-xl border-l-4 border-primary hidden md:block"
            >
              <p className="text-4xl font-heading font-bold text-primary">500+</p>
              <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Active Members</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-dark-900 dark:text-white">
              Built for <span className="text-primary">Real Results</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Volt Fit Hub isn't just a place to sweat. It's a sanctuary for those who want to push their limits. 
              Whether you are looking to lose weight, build muscle, or improve your general health, 
              we provide the environment and expertise you need to succeed.
            </p>

            <ul className="space-y-4">
              {features.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium text-dark-800 dark:text-neutral-200">{item}</span>
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