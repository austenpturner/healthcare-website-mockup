import { IoLocationSharp } from "react-icons/io5";
import ContactSection from "../../components/contactSection";
import BottomCorners from "../../components/corners/bottomCorners";
import TopCorners from "../../components/corners/topCorners";
import Hero from "../../components/hero";
import PageIntro from "../../components/pageIntro";
import {
  contactContent,
  contactLinks,
  contactInfo,
} from "../../config/contact";
import "./styles.scss";

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
          <div className="contact-info">
            <TopCorners />
            <div className="content-container">
              <div className="block">
                <h3>Reach us by phone or email:</h3>
                <div className="contact-link-container">
                  {contactLinks.map((method) => {
                    return (
                      <a
                        href={method.href}
                        key={method.id}
                        className="contact-link"
                      >
                        <method.icon />
                        <span>{method.value}</span>
                      </a>
                    );
                  })}
                  <span className="disclaimer">
                    *This contact info is for demonstration purposes only.
                  </span>
                </div>
              </div>
              <div className="block">
                <h3>Please send mail to:</h3>
                <div className="mailing-address">
                  <p>{contactInfo.mailingAddress.line1}</p>
                  <p>{contactInfo.mailingAddress.line2}</p>
                  <span className="disclaimer">
                    *This contact info is for demonstration purposes only.
                  </span>
                </div>
              </div>
            </div>
            <BottomCorners />
          </div>
          <div className="location-info">
            <TopCorners />
            <div className="content-container">
              <h3>Locate our office:</h3>
              <p className="address">
                <IoLocationSharp />
                {contactInfo.address}
              </p>
              <p>
                {`Get directions: `}
                <a
                  href="https://www.google.com/maps/dir//Bellevue+Library+1111+110th+Ave+NE+Bellevue,+WA+98004/@47.6200443,-122.1941689,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906c8c6badfd01:0xba3faf4f02e64232!2m2!1d-122.1941689!2d47.6200443?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Google Maps
                </a>
              </p>
              <span className="disclaimer">
                *This location is for demonstration purposes only.
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43029.01142467718!2d-122.27038621902466!3d47.62004253316506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c8c6badfd01%3A0xba3faf4f02e64232!2sBellevue%20Library!5e0!3m2!1sen!2sus!4v1733863161543!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>

              <p className="callForHelp">
                *Please call our office if you need help with directions. Our
                team will be happy to assist you to the best of their ability.
              </p>
            </div>
            <BottomCorners />
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
