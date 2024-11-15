import { motion } from 'framer-motion';
import { ShieldCheckIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export function SecurityStatus() {
  const stats = [
    {
      title: 'System Status',
      value: 'Protected',
      icon: <ShieldCheckIcon className="w-6 h-6 text-green-400" />,
      color: 'text-green-400'
    },
    {
      title: 'Active Threats',
      value: '2',
      icon: <ExclamationCircleIcon className="w-6 h-6 text-red-400" />,
      color: 'text-red-400'
    },
    {
      title: 'Last Scan',
      value: '2m ago',
      icon: <ClockIcon className="w-6 h-6 text-blue-400" />,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className={`text-2xl font-semibold ${stat.color} mt-1`}>{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}