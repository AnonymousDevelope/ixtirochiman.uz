import type { FeatureCardProps, ServiceCardProps } from "@/types/mission-section";
import { Lightbulb, Users, Rocket, Target, Code, Wrench, GraduationCap, Building } from "lucide-react";

const FEATURES: FeatureCardProps[] = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Bizning maqsadimiz",
      description: "Toshkent viloyatida innovatsion texnologiyalar va tadbirkorlik faoliyatini rivojlantirish"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Innovatsiya markazi",
      description: "Yoshlarning ijodiy g'oyalarini amalga oshirish va texnologik yechimlar yaratish"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Jamoa ishlari",
      description: "Tajribali mentorlar va mutaxassislar bilan birga ishlash imkoniyati"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Startup rivojlantirish",
      description: "Boshlang'ich loyihalarni muvaffaqiyatli biznesga aylantirish"
    }
  ];
  
  const SERVICES: ServiceCardProps[] = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "IT ta'lim markazi",
      description: "Zamonaviy texnologiyalarni o'rganish va amaliy ko'nikma oshirish",
      tags: ["Robotika", "Frontend dasturlash", "Backend dasturlash", "3D modellashtirish"]
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "FABLAB",
      description: "3D printer, lazer kesish, elektronika va boshqa zamonaviy asboblar bilan ishlash",
      tags: ["3D chop etish", "Lazer kesish", "Elektronika", "Prototiplash"]
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Startup maktabi",
      description: "Tadbirkorlik ko'nikmalari va biznes rejalashtirish bo'yicha ta'lim",
      tags: ["Biznes reja", "Marketing", "Moliyalashtirish", "Bozor tahlili"]
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Laboratoriya",
      description: "MVP (Minimal qiymati mahsulot) ishlab chiqish va test qilish",
      tags: ["Prototip yaratish", "Mahsulot sinovlari", "Texnik yordam", "Konsalting"]
    }
  ];
  
  const STATS = [
    { value: "50+", label: "Faol startaplar" },
    { value: "500+", label: "O'qitilgan talabalar" },
    { value: "10+", label: "Texnologik kurslar" }
  ];
  
  export {
    FEATURES,
    SERVICES,
    STATS
  }