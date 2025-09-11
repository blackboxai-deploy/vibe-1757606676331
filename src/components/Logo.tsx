"use client";

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  variant = 'light',
  className = '' 
}: LogoProps) {
  
  // Size configurations
  const sizeConfig = {
    small: {
      image: 'w-6 h-6',
      text: 'text-lg',
      spacing: 'space-x-2'
    },
    medium: {
      image: 'w-10 h-10',
      text: 'text-2xl',
      spacing: 'space-x-3'
    },
    large: {
      image: 'w-16 h-16',
      text: 'text-4xl',
      spacing: 'space-x-4'
    }
  };

  // Logo image URL - Replace this with your actual logo
  const logoUrl = "https://placehold.co/80x80/3b82f6/ffffff?text=SP";
  
  // Alternative: You can use a local logo from the public folder
  // const logoUrl = "/logo.png";
  
  // Text color variants
  const textColor = variant === 'light' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    : 'text-white';

  return (
    <div className={`flex items-center ${sizeConfig[size].spacing} ${className}`}>
      {/* Logo Image */}
      <img 
        src={logoUrl}
        alt="SocialPro Logo" 
        className={`${sizeConfig[size].image} rounded-lg object-contain`}
      />
      
      {/* Company Name */}
      {showText && (
        <div className={`${sizeConfig[size].text} font-bold ${textColor}`}>
          SocialPro
        </div>
      )}
    </div>
  );
}