import { Mail } from "lucide-react";

export const JoinTeamSection: React.FC = () => (
  <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      Jamoimizga qo&apos;shiling!
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
      Agar siz ham innovatsiya va ta&apos;lim sohasida ishlashni istasangiz,
      bizning jamoamizga qo&apos;shiling
    </p>
    <a
      href="mailto:info@ixtirochiman.uz"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
    >
      <Mail className="h-5 w-5 mr-2" />
      Rezyume yuborish
    </a>
  </div>
);
