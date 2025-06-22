// src/components/FooterLinks.tsx
import React from 'react';

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-tech-cyan transition-colors duration-200"
            aria-label={`Navigate to ${link.label}`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(FooterLinks);