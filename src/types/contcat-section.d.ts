export interface ContactDetail {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  iconBg: string;
  iconColor: string;
}
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}