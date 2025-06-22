import type { ContactDetail } from "@/types/contcat-section";
import { Mail, MapPin, Phone } from "lucide-react";

export const contactDetails: ContactDetail[] = [
    {
      id: 1,
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: 'Toshkent viloyati, Ohangaron shahri,\nAMIR TEMUR 18',
      iconBg: 'bg-tech-cyan/20',
      iconColor: 'text-tech-cyan',
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+998 33 634 00 00',
      iconBg: 'bg-tech-electric/20',
      iconColor: 'text-tech-electric',
    },
    {
      id: 3,
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'info@ixtirochiman.uz',
      iconBg: 'bg-tech-purple/20',
      iconColor: 'text-tech-purple',
    },
  ];