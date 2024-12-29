import React from 'react';
import SocialLink from './common/SocialLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <SocialLink size="md" />
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Deep Playa Simulator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;