import React from 'react';
import { Instagram } from 'lucide-react';

interface SocialLinkProps {
  size?: 'sm' | 'md' | 'lg';
}

const SocialLink: React.FC<SocialLinkProps> = ({ size = 'sm' }) => {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  return (
    <a 
      href="https://www.instagram.com/deepplayasimulator/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-orange-400 transition-colors p-2 rounded-full hover:bg-white/10"
      aria-label="Follow us on Instagram"
    >
      <Instagram className={sizes[size]} />
    </a>
  );
};

export default SocialLink;