import { Linkedin, Mail, Twitter } from "lucide-react";
import { SocialLink } from "./SocialLink";
import type { TeamMemberProps } from "@/types/team-section";

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  initials,
  image,
  name,
  role,
  description,
  email,
}) => {
  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group">
      <div className="p-6 text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center space-x-3">
          <SocialLink href="#" icon={Linkedin} />
          <SocialLink href="#" icon={Twitter} />
          {email && <SocialLink href={`mailto:${email}`} icon={Mail} />}
        </div>
      </div>
    </div>
  );
};

export { TeamMemberCard };
