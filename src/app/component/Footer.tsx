'use client';

import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Spotlight } from '../component/ui/Spotlight';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <motion.footer
     
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-[#0b0b0b] text-white py-20 px-6 sm:px-10 lg:px-28 overflow-hidden"
    >
      {/* Floating Gradient Backgrounds */}
      <div className="absolute inset-0 -z-10">
<Spotlight className="top-[-24%] left-[-10%] right-[-40%]" fill="#00ffff" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-900 via-black to-black opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-900 via-black to-black opacity-30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Footer Content */}
      <div className="grid md:grid-cols-4 gap-12 relative z-10">

        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
            Art of music
          </h1>
          <p className="text-gray-400 text-sm mt-4">
           Where rhythm meets design. Accernity Music delivers immersive, motion-driven experiences for artists, listeners, and creators alike.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Community</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
          </ul>
        </motion.div>

        {/* Newsletter (Dark Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="rounded-2xl bg-[#111111] border border-gray-800 p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-2">Join Our Circle</h3>
          <p className="text-sm text-gray-500 mb-4">Get insider updates and UI trends directly to your inbox.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:brightness-110 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-gray-500"
      >
        <p>&copy; {new Date().getFullYear()} Accernity. All rights reserved.</p>
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
