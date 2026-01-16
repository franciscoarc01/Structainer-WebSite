import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-gold';
  children: ReactNode;
  showArrow?: boolean;
  href?: string;
  className?: string;
}

export function BrandButton({
  variant = 'primary',
  children,
  showArrow = false,
  href,
  className = '',
  ...props
}: BrandButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer";

  const variantStyles = {
    primary: "bg-brand-blue text-white border-2 border-transparent hover:shadow-lg hover:shadow-blue-900/30",
    secondary: "bg-brand-gold text-brand-blue border-2 border-transparent hover:shadow-lg hover:shadow-yellow-600/30",
    outline: "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white",
    'outline-gold': "bg-transparent text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-blue"
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
        {showArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {showArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
