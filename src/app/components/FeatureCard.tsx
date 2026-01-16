import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'gold-accent';
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
  className = ''
}: FeatureCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2
        ${variant === 'gold-accent' ? 'border-t-4' : 'border'}
        ${className}
      `}
      style={{
        borderColor: variant === 'gold-accent' ? '#C8A256' : 'rgba(4, 37, 77, 0.1)'
      }}
    >
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #04254D 0%, #0A3B7A 100%)'
        }}
      >
        <Icon className="w-7 h-7 text-white" style={{ color: '#C8A256' }} />
      </div>
      <h3
        className="text-xl font-bold mb-3"
        style={{ color: '#04254D' }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed"
        style={{ color: '#5A5A5A' }}
      >
        {description}
      </p>
    </div>
  );
}
