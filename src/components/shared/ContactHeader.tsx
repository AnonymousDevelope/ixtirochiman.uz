import React from 'react';

const ContactHeader: React.FC = () => (
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-6">
      <span className="gradient-text">Biz bilan bog'lanish</span>
    </h2>
    <p className="text-xl text-foreground/40 max-w-3xl mx-auto">
      Innovatsion sayohatingizni boshlashga tayyormisiz? Bugun biz bilan bog‘laning va texnologiyaning kelajagiga qo‘shiling.
    </p>
  </div>
);

export default React.memo(ContactHeader);