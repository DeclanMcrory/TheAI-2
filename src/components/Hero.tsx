import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">TheAI</h1>
          <p className="text-xl mb-8">Advanced AI-Powered Cybersecurity Platform</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
}