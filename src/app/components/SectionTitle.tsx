import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ children, subtitle, centered = false, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
        style={{ color: '#04254D' }}
      >
        {children}
        <div
          className={`absolute -bottom-2 ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-20 h-1 rounded-full`}
          style={{
            background: 'linear-gradient(90deg, #C8A256 0%, #D4B470 100%)'
          }}
        />
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-6 text-lg max-w-3xl" style={{ color: '#5A5A5A' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
