import type { SocialLinkProps } from "@/types/team-section";

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
  >
    <Icon className="h-4 w-4" />
  </a>
);