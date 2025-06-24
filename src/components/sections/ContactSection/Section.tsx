import ContactHeader from '@/components/shared/ContactHeader';
import ContactInfo from '@/components/shared/ContactInfo';
import MapCard from '@/components/shared/MapCard';
import ContactForm from '@/components/shared/ContactForm';
import { contactDetails } from '@/data/sections/contact.data';
import { sendTelegramMessage } from '@/lib/telegram';
import type { FormData } from "@/types/contcat-section"; // agar FormData turini alohida olib chiqqan bo‘lsangiz

const Section = () => {
  const handleSend = (data: FormData) => {
    sendTelegramMessage(data);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-tech-darker relative scrollbar-custom"
    >
      <div className="container mx-auto px-4 root-container">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo details={contactDetails} />
            <MapCard />
          </div>
          <ContactForm onSend={handleSend} />
        </div>
      </div>
    </section>
  );
};

export default Section;
