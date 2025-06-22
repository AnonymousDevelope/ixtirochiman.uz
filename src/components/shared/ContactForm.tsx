import React, { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { Label } from "@components/ui/label";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Placeholder for form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form or show success message as needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
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
            <Label className="block text-sm  font-medium text-foreground/60 mb-2">
              First Name
            </Label>
            <Input
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-foreground/60 mb-2">
              Last Name
            </Label>
            <Input
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=''>
          <Label className="block text-sm font-medium text-foreground/60 mb-2">
            Email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="block text-sm  font-medium text-foreground/60 mb-2">
            Phone Number
          </Label>
          <Input
            name="phone"
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="block text-sm  font-medium text-foreground/60 mb-2">
            Message
          </Label>
          <Textarea
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
          variant={"default"}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ContactForm);