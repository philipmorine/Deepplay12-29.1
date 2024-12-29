import React from 'react';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';

interface NavigationItemsProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const NavigationItems: React.FC<NavigationItemsProps> = ({ onNavigate, className = '' }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    <NavLink href="#about" onClick={onNavigate}>About</NavLink>
    <NavLink href="#events" onClick={onNavigate}>Events</NavLink>
    <NavLink href="#game" onClick={onNavigate}>Game</NavLink>
    <div className="pl-2">
      <SocialLinks />
    </div>
  </div>
);

export default NavigationItems;