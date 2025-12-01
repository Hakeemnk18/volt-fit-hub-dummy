import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/constants"; 
import { motion } from "framer-motion"; // ✨ Re-added motion

// Animation variants for the card appearance
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100, // Makes the animation snappy
      damping: 15,
      mass: 0.5,
      duration: 0.5
    }
  },
};


const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4 text-center">
          What People <span className="text-primary">Say</span>
        </h2>
        <p className="text-center text-lg text-neutral-600 dark:text-neutral-400 mb-10">
            Hear from our happy customers across the globe.
        </p>
      </div>

      <div className="relative overflow-hidden"> 
        <div 
          className="
            flex gap-6 
            overflow-x-auto 
            pb-20
            px-6 sm:px-10 lg:px-20 xl:px-32 
            snap-x snap-mandatory 
            scrollbar-hide 
            scroll-p-6 
          "
        >
          {testimonials.map((t) => (
            // 👇 KEY CHANGE: Using motion.div for animation
            <motion.div
              key={t.id}
              className="
                bg-white dark:bg-dark-900 
                rounded-2xl shadow-xl hover:shadow-2xl 
                p-6 md:p-8 
                
                w-[85%] sm:w-[50%] md:w-[40%] lg:w-[30%]
                flex-shrink-0
                
                snap-center
                
                transition-all duration-300
                
                /* Hover/Active effects are still powered by Tailwind */
                transform hover:scale-105 hover:shadow-2xl active:scale-95
              "
              
              // 👇 Animation properties
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is visible
              variants={cardVariants}
            >
              <div className="flex items-start gap-4 ">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-xl text-dark-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{t.role}</p>
                </div>
              </div>

              <p className="mt-5 text-neutral-700 dark:text-neutral-300 italic text-base leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-4 flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-yellow-500 fill-yellow-500" 
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;