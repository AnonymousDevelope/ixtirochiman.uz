// src/components/FooterBottom.tsx
import React from 'react';

const FooterBottom: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center justify-between">
    <p className="text-gray-400 text-sm">
      © 2025 Toshkent viloyati Yoshlar Texnoparki. All rights reserved.
    </p>
    <div className="flex items-center space-x-6 mt-4 md:mt-0">
      <a
        href="#"
        className="text-gray-400 hover:text-tech-cyan transition-colors duration-200 text-sm"
        aria-label="View Privacy Policy"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-tech-cyan transition-colors duration-200 text-sm"
        aria-label="View Terms of Service"
      >
        Terms of Service
      </a>
      <div className="flex items-center space-x-2">
        <span className="text-gray-400 text-sm">Built with</span>
        <span className="text-tech-cyan" aria-label="love">
          💙
        </span>
        <span className="text-gray-400 text-sm">in Uzbekistan</span>
      </div>
    </div>
  </div>
);

export default React.memo(FooterBottom);