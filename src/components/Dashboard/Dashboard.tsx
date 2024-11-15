import { motion } from 'framer-motion';
import { SecurityStatus } from './SecurityStatus';
import { ThreatMetrics } from './ThreatMetrics';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Security Dashboard</h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors">
            Run Scan
          </button>
        </div>
        
        <SecurityStatus />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ThreatMetrics />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { time: '2m ago', event: 'Malware attempt blocked' },
                { time: '15m ago', event: 'System scan completed' },
                { time: '1h ago', event: 'Firewall rules updated' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-400">{activity.event}</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}