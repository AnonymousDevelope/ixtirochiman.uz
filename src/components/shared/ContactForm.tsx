import React, { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { Label } from '@components/ui/label';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSend?: (data: FormData) => Promise<boolean> | void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSend }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidForm = (): boolean => {
    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName.trim()) {
      toast.warning("Ismingizni kiriting.");
      return false;
    }
    if (!lastName.trim()) {
      toast.warning("Familiyangizni kiriting.");
      return false;
    }
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.warning("To‘g‘ri email kiriting.");
      return false;
    }
    if (!phone.trim() || !/^\+?\d{7,15}$/.test(phone)) {
      toast.warning("Telefon raqamingiz noto‘g‘ri formatda.");
      return false;
    }
    if (!message.trim()) {
      toast.warning("Xabar matnini kiriting.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!isValidForm()) return;

    setLoading(true);
    try {
      if (onSend) {
        const result = await onSend(formData);
        if (result === false) {
          toast.error("❌ Xabar yuborishda xatolik yuz berdi!");
        } else {
          toast.success("✅ Xabaringiz muvaffaqiyatli yuborildi!");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
        }
      }
    } catch (error) {
      console.error("Send error:", error);
      toast.error("❌ Server bilan bog'lanishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border bg-tech-dark/50 border-tech-cyan/20 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-2xl font-bold text-white">
          Send us a message
        </h3>
      </div>
      <div className="p-6 pt-0 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <Label htmlFor="firstName" className="block text-sm font-medium text-foreground/60 mb-2">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="block text-sm font-medium text-foreground/60 mb-2">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-foreground/60 mb-2">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="phone" className="block text-sm font-medium text-foreground/60 mb-2">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-foreground/60 mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or how we can help you..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <Button
          className="w-full bg-gradient-blue-bg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Yuborilmoqda..." : "Send Message"}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ContactForm);
