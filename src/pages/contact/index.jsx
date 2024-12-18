import ContactSection from "../../components/contactSection";
import Hero from "../../components/hero";
import PageIntro from "../../components/pageIntro";
import { contactContent, contact } from "../../config/contact";
import "./styles.scss";
import ContactContainer from "../../components/contactContainer";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Hero
        header={contactContent.hero.header}
        backgroundImg={contactContent.hero.backgroundImg}
      />
      <PageIntro content={contactContent.intro} />
      <section className="contact-section" id="contact-details">
        <div className="container">
          {contact.map((section) => {
            return <ContactContainer content={section} key={section.id} />;
          })}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
