// src/components/ui/SmoothLink.tsx
import React from 'react';
import { cn } from '@/lib/utils';

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
    <a
      href={href}
      className={cn('cursor-pointer', className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothLink;