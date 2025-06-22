import React from 'react';

const ContactHeader: React.FC = () => (
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-6">
      <span className="gradient-text">Get In Touch</span>
    </h2>
    <p className="text-xl text-foreground/40 max-w-3xl mx-auto">
      Ready to start your innovation journey? Contact us today and join the future
      of technology.
    </p>
  </div>
);

export default React.memo(ContactHeader);