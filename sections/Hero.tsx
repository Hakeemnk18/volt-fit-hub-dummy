import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { ChevronRight, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* Main Background */}
        <motion.img
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        {/* Energetic Color Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute w-[900px] h-[900px] bg-primary/40 blur-[200px] -top-40 left-1/2 -translate-x-1/2 rounded-full"
        />
      </div>

      {/* FLOATING DECORATIVE CIRCLES */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute w-96 h-96 rounded-full border-4 border-white/10 blur-md right-10 top-20"
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[80px] left-10 bottom-20"
      />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight text-white drop-shadow-xl">
            UNLEASH YOUR{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "200% 50%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-gradient-to-r from-primary via-red-500 to-orange-400 bg-[length:200%_200%] text-transparent bg-clip-text"
            >
              POWER
            </motion.span>
          </h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-200 max-w-xl mt-6"
          >
            Premium gym experience with next-level equipment, expert trainers,
            and intense energy.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mt-10"
          >
            <Button className="w-full md:w-auto text-lg shadow-xl shadow-primary/20">
              Join Now <ChevronRight size={20} />
            </Button>

            <a href="#plans" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full md:w-auto border-white text-white hover:bg-white hover:text-black"
              >
                View Plans
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <ArrowDown size={28} />
          <span className="text-sm">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
