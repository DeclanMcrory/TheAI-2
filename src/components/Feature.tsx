import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <motion.div 
      className="p-6 bg-white rounded-xl shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-3xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}