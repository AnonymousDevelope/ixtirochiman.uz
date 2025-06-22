// src/components/ui/SmoothLink.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({ href, className, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Link
      to={href}
      className={cn('cursor-pointer', className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmoothLink;