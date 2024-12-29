import { useCallback } from 'react';

export const useNavigation = (onClose?: () => void) => {
  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (href) {
      // Update URL with hash
      window.location.hash = href.replace('#', '');
      
      // Smooth scroll to target if not game section
      if (href !== '#game') {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Close menu if callback provided
      onClose?.();
    }
  }, [onClose]);

  return { handleNavigation };
};