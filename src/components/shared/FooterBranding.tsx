// src/components/FooterBranding.tsx
import React from 'react';

interface ContactDetail {
  icon: string;
  text: string;
}

interface FooterBrandingProps {
  contactDetails: ContactDetail[];
}

const FooterBranding: React.FC<FooterBrandingProps> = ({ contactDetails }) => (
  <div className="lg:col-span-2">
    <div className="text-3xl font-bold gradient-text mb-4">Ixtirochiman.uz</div>
    <p className="text-gray-300 mb-6 leading-relaxed">
      Tashkent Region Youth Technopark - Empowering the next generation of
      innovators through cutting-edge technology, world-class education, and
      comprehensive startup support.
    </p>
    <div className="space-y-2 text-sm text-gray-400">
      {contactDetails.map((detail) => (
        <p key={detail.text}>
          <span aria-hidden="true">{detail.icon === 'Location' ? '📍' : detail.icon === 'Phone' ? '📞' : '✉️'}</span>{' '}
          {detail.text}
        </p>
      ))}
    </div>
  </div>
);

export default React.memo(FooterBranding);