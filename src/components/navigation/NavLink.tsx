import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className = '',
  onClick 
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      inline-flex items-center justify-center
      min-h-[44px] min-w-[44px] px-4
      text-white hover:text-orange-400 active:text-orange-500
      relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
      after:w-0 after:bg-orange-400 after:transition-all after:duration-300
      hover:after:w-full focus:after:w-full
      outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 
      focus:ring-offset-black rounded-md
      transition-all duration-200
      text-base font-medium
      ${className}
    `}
  >
    {children}
  </a>
);

export default NavLink;