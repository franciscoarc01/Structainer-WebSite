import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
}

const animationClasses = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100'
  },
  slideUp: {
    initial: 'opacity-0 translate-y-10',
    animate: 'opacity-100 translate-y-0'
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-10',
    animate: 'opacity-100 translate-x-0'
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-10',
    animate: 'opacity-100 translate-x-0'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100'
  }
};

export function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const classes = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? classes.animate : classes.initial
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
