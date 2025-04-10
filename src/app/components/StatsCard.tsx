
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <Card className="card-gradient">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="flex items-center gap-2 mb-2">
          {icon && <div className="text-badger-blue">{icon}</div>}
          <span className="text-3xl font-bold text-foreground">{value}</span>
        </div>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
