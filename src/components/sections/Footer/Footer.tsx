import FooterBranding from '@/components/shared/FooterBranding';
import FooterLinks from '@/components/shared/FooterLinks';
import FooterBottom from '@/components/shared/FooterBottom';
import { contactDetails, linkGroups } from '@/data/footer.data';


const Footer = () => (
  <footer className="bg-tech-darker border-t border-tech-cyan/20">
    <div className="container mx-auto px-4 py-16 root-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <FooterBranding contactDetails={contactDetails} />
        {linkGroups.map((group) => (
          <FooterLinks key={group.id} title={group.title} links={group.links} />
        ))}
      </div>
      <hr className="my-8 border-tech-cyan/20" />
      <FooterBottom />
    </div>
  </footer>
);

export default Footer;