import React from 'react';

interface ContactDetail {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  iconBg: string;
  iconColor: string;
}

interface ContactInfoProps {
  details: ContactDetail[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ details }) => (
  <div className="space-y-6 ">
    {details.map((detail) => (
      <div key={detail.id} className="flex items-start space-x-4">
        <div className={`p-3 ${detail.iconBg} rounded-lg`}>
          <span className={detail.iconColor}>{detail.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground  mb-2">{detail.title}</h3>
          <p className="text-foreground whitespace-pre-line">{detail.content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default React.memo(ContactInfo);