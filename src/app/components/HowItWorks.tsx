import React from 'react';
import { HandCoins, HeartHandshake, Blend, UsersRound } from 'lucide-react';
import FeatureCard from './FeatureCard';

const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <HandCoins className="w-6 h-6 text-orange-500" />,
      title: "Easy to Use",
      description: "Badger automatically finds and applies discount codes when you shop on supported sites.",
      colorClass: "bg-orange-100"
    },
    {
      icon: <UsersRound className="w-6 h-6 text-orange-500" />,
      title: "Increase Affiliate Sales",
      description: "Stop spending money on ads, Badger does all the work for you by sharing the codes with our community.",
      colorClass: "bg-orange-100"
    },
    {
      icon: <Blend className="w-6 h-6 text-orange-600" />,
      title: "Transparent",
      description: "Our extension is open source, so anyone can review and audit what Badger does.",
      colorClass: "bg-orange-200"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-500" />,
      title: "Community-driven",
      description: "Coupons are added and validated by our ever-growing user base, so you don’t get codes that don’t work anymore.",
      colorClass: "bg-teal-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Badger works seamlessly in the background to enhance your browsing experience while keeping your data private and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
