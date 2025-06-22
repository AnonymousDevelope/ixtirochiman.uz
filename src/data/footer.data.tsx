import type { ContactDetail, LinkGroup } from "@/types/footer";

export const contactDetails: ContactDetail[] = [
  {
    id: 1,
    icon: "Location",
    text: "Toshkent viloyati, Ohangaron shahri, AMIR TEMUR 18",
  },
  { id: 2, icon: "Phone", text: "+998 33 634 00 00" },
  { id: 3, icon: "Email", text: "info@ixtirochiman.uz" },
];
export const linkGroups: LinkGroup[] = [
  {
    id: 1,
    title: "Centers",
    links: [
      { id: 1, label: "Learning Center", href: "#learning" },
      { id: 2, label: "FABLAB", href: "#fablab" },
      { id: 3, label: "Laboratory", href: "#laboratory" },
      { id: 4, label: "Startup School", href: "#startup-school" },
    ],
  },
  {
    id: 2,
    title: "Programs",
    links: [
      { id: 1, label: "Robotics", href: "#" },
      { id: 2, label: "Frontend Development", href: "#" },
      { id: 3, label: "Backend Development", href: "#" },
      { id: 4, label: "3D Modeling", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { id: 1, label: "Blog", href: "#" },
      { id: 2, label: "Events", href: "#" },
      { id: 3, label: "News", href: "#" },
      { id: 4, label: "Career", href: "#" },
    ],
  },
];
