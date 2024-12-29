import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationItems from './navigation/NavigationItems';
import MobileMenu from './navigation/MobileMenu';
import { useNavigation } from '../hooks/useNavigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleNavigation } = useNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={handleNavigation}
            className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
            aria-label="Deep Playa Simulator - Back to top"
          >
            Deep Playa Simulator
          </a>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-white hover:text-orange-400 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <nav className="hidden md:flex items-center">
            <NavigationItems onNavigate={handleNavigation} />
          </nav>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;