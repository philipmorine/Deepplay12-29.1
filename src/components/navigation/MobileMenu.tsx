import React from 'react';
import { X } from 'lucide-react';
import NavigationItems from './NavigationItems';
import { useNavigation } from '../../hooks/useNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { handleNavigation } = useNavigation(onClose);

  return (
    <div 
      className={`
        fixed inset-0 z-50 bg-black/95 backdrop-blur-sm
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="text-white hover:text-orange-400 transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center">
          <NavigationItems 
            onNavigate={handleNavigation}
            className="flex-col text-xl"
          />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;