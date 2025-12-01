import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { images } from "@/constants";


export const Gallery: React.FC = () => {
  

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const x = -pos * (carouselRef.current?.clientWidth || 0);
    controls.start({ x, transition: { type: "spring", stiffness: 90, damping: 18 } });
  }, [pos, controls]);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 dark:text-white">Gallery</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPos((p) => Math.max(0, p - 1))}
              aria-label="Previous"
              className="p-2 rounded-md bg-white/80 dark:bg-dark-700 shadow-sm hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => setPos((p) => Math.min(images.length - 1, p + 1))}
              aria-label="Next"
              className="p-2 rounded-md bg-white/80 dark:bg-dark-700 shadow-sm hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl" style={{ touchAction: "pan-y" }}>
          <motion.div
            ref={carouselRef}
            animate={controls}
            className="flex w-full"
            style={{ willChange: "transform" }}
            drag="x"
            dragConstraints={{ left: -(images.length - 1) * (carouselRef.current?.clientWidth || 0), right: 0 }}
            onDragEnd={(e, info) => {
              const width = carouselRef.current?.clientWidth || 1;
              const moved = -info.point.x + info.offset.x; // not perfect but okay cross-device
              const delta = Math.round(info.offset.x / (width / 2));
              setPos((p) => Math.min(Math.max(0, p - delta), images.length - 1));
            }}
          >
            {images.map((src, i) => (
              <div key={i} className="min-w-full px-3 md:px-6 py-6">
                <motion.img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  initial={{ scale: 1.02, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            ))}
          </motion.div>

          {/* small pager */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setPos(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === pos ? "bg-primary" : "bg-neutral-300 dark:bg-dark-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery