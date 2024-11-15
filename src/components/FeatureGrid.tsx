import { BsShieldCheck, BsRobot, BsPeople, BsLock } from 'react-icons/bs';
import { Feature } from './Feature';

export function FeatureGrid() {
  const features = [
    {
      icon: <BsShieldCheck />,
      title: "Predictive Threat Detection",
      description: "Advanced machine learning algorithms analyze network patterns for early threat detection."
    },
    {
      icon: <BsRobot />,
      title: "AI-Powered Security Suite",
      description: "Automated penetration testing and real-time threat detection powered by AI."
    },
    {
      icon: <BsPeople />,
      title: "Human-Centric Security",
      description: "Interactive security awareness training with 24/7 AI chatbot support."
    },
    {
      icon: <BsLock />,
      title: "Advanced Security Features",
      description: "Enterprise-grade protection with emergency data purge and compliance automation."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}