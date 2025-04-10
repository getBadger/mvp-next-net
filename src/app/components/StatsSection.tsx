
import React from 'react';
import { Users, Shield, Clock } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard 
            value="10,000+"
            label="Active Users"
            icon={<Users className="w-6 h-6" />}
          />
          <StatsCard 
            value="1M+"
            label="Trackers Blocked"
            icon={<Shield className="w-6 h-6" />}
          />
          <StatsCard 
            value="30%"
            label="Faster Browsing"
            icon={<Clock className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
