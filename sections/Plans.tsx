import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { PLANS } from '../constants';

// SMOOTH VARIANTS
const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.8,
      duration: 0.6
    }
  }
};

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-bold text-dark-900 dark:text-white mb-4"
          >
            Membership <span className="text-primary">Plans</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Choose the package that fits your goals. No hidden fees. Just results.
          </motion.p>
        </div>

        {/* STAGGER ANIMATION WRAPPER */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.18 }}  // smooth stagger
        >
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 140, damping: 14 }
              }}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 
                ${plan.isPopular 
                  ? 'bg-dark-900 dark:bg-dark-800 text-white shadow-2xl shadow-primary/20 border-2 border-primary' 
                  : 'bg-neutral-100 dark:bg-dark-800 text-dark-900 dark:text-white border border-transparent dark:border-dark-700 hover:shadow-xl'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Best Value
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2 font-heading uppercase tracking-wide">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className={`text-5xl font-bold font-heading ${plan.isPopular ? 'text-primary' : ''}`}>{plan.price}</span>
                  <span className="text-sm opacity-70 mb-2">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-primary' : 'bg-neutral-300 dark:bg-dark-700'}`}>
                       <Check size={14} className={plan.isPopular ? 'text-white' : 'text-dark-900 dark:text-white'} />
                    </div>
                    <span className="text-sm font-medium opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'secondary'} 
                className={`w-full ${!plan.isPopular ? 'border border-neutral-300 dark:border-transparent' : ''}`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
