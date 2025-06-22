import { teamMembers } from '@/data/sections/team.data';
import { TeamHeader } from '@/components/shared/TeamHeader';
import { TeamMemberCard } from '@/components/shared/TeamMemberCard';
import { JoinTeamSection } from '@/components/shared/JoinTeamSection';

// Main Section component
const Section = () => (
  <section id="team" className="py-24 lg:px-[250px] bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <TeamHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <JoinTeamSection />
    </div>
  </section>
);

export default Section;