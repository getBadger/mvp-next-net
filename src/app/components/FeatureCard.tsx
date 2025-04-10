
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  colorClass = "bg-[color:hsl(48 89% 60%)]/10" 
}) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass} mb-4`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
