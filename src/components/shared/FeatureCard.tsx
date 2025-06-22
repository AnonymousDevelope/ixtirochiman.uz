import type { FeatureCardProps } from "@/types/mission-section";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 group">
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
  export default FeatureCard;