import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

// GLOBAL VARIANTS FOR SMOOTH ANIMATION
const fadeSlideLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.6
    }
  }
};

const fadeSlideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.7
    }
  }
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 text-white relative">
      <div className="container mx-auto px-6">
        
        {/* WRAPPER FOR STAGGER */}
        <motion.div
          className="flex flex-col lg:flex-row gap-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* CONTACT INFO */}
          <motion.div variants={fadeSlideLeft} className="w-full lg:w-1/3">
            <h2 className="text-5xl font-heading font-bold mb-8">Get In Touch</h2>

            <p className="text-neutral-400 mb-10 text-lg">
              Ready to start your journey? Visit us or drop a message.
              We are here to help you achieve your fitness goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Location</h4>
                  <p className="text-neutral-400">123 Power Street, Muscle City,<br />Fitness District, 50001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Email</h4>
                  <p className="text-neutral-400">contact@voltfithub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Phone</h4>
                  <p className="text-neutral-400">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <motion.div variants={fadeSlideUp} className="mt-12">
              <h4 className="font-bold text-lg uppercase mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, MessageCircle, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    variants={fadeSlideUp}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Icon size={20} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            variants={fadeSlideUp}
            className="w-full lg:w-2/3 bg-dark-800 p-8 md:p-12 rounded-2xl border border-dark-700"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.12 }}
              >
                <motion.div variants={fadeSlideUp} className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={fadeSlideUp} className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={fadeSlideUp} className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Subject</label>
                <select className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Personal Training</option>
                </select>
              </motion.div>

              <motion.div variants={fadeSlideUp} className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>

              <motion.div variants={fadeSlideUp}>
                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-dark-800 text-center text-neutral-500 text-sm"
        >
          © {new Date().getFullYear()} Volt Fit Hub. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
