interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TeamMemberProps {
  initials: string;
  image:string;
  name: string;
  role: string;
  description: string;
  email: string;
}
export {
    TeamMemberProps,
    SocialLinkProps
}