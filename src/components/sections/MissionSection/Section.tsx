import { FEATURES, SERVICES, STATS } from "@/data/sections/mission.data";
import ServiceCard from "@/components/shared/ServiceCard";
import FeatureCard from "@/components/shared/FeatureCard";

const Section = () => {
  return (
    <section
      id="mission"
      className="py-24 lg:px-[250px] bg-gradient-to-br from-background via-blue-50/20 to-background dark:from-background dark:via-blue-950/20 dark:to-background"
    >
      <div className="container mx-auto px-4">
        {/* Mission Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Bizning missiyamiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toshkent viloyati yoshlar texnoparki - bu innovatsiya, ta'lim va
            texnologiya markazi bo'lib, kelajak bunyodkorlarini shakllantiradi
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mb-12" id="our_services">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Bizning xizmatlarimiz
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="text-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Bizning maqsadimiz
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            2030 yilga qadar Toshkent viloyatini O'zbekistonning eng yirik
            texnologik innovatsiya markaziga aylantirish va 1000 dan ortiq
            muvaffaqiyatli startapni yaratishga yordam berish
          </p>
          <div className="mt-6 flex justify-center space-x-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
