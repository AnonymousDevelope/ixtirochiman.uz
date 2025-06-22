import StartupHeader from "@/components/shared/StartupHeader"; 
import StatCard from "@/components/shared/StatCard";
import CourseCard from "@/components/shared/CourseCard";
import JoinIncubator from "@/components/shared/JoinIncubator";
import { courses, stats } from "@/data/sections/school.data";

const Section = () => (
  <section
    id="startup-school"
    className="py-24 lg:px-[250px] bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 scrollbar-custom"
  >
    <div className="container mx-auto px-4 root-container">
      <StartupHeader />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      <JoinIncubator />
    </div>
  </section>
);

export default Section;
