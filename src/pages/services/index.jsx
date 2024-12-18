import Hero from "../../components/hero";
import "./styles.scss";
import { servicesContent } from "../../config/services";
import { servicesFrequency } from "../../config/services";
import { servicesPlatform } from "../../config/services";
import { servicesTypes } from "../../config/services";
import Blocks from "../../components/blocks";
import PageIntro from "../../components/pageIntro";
import ContactSection from "../../components/contactSection";
import Folder from "../../components/folder";
import Tab from "../../components/tab";
import SectionIntro from "../../components/sectionIntro";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Hero
        header={servicesContent.hero.header}
        backgroundImg={servicesContent.hero.backgroundImg}
        fontSize="largeHeader"
      />
      <PageIntro content={servicesContent.intro} />

      <section className="platform" id="therapy-platforms">
        <SectionIntro content={servicesPlatform.intro} />
        <div className="platform-blocks">
          {servicesPlatform.options.map((option) => {
            return (
              <Blocks
                content={option}
                key={option.id}
                reverse={option.id % 2 === 0 ? "reverse" : ""}
                maxWidth="largeWidth"
                maxHeight="regularHeight"
              />
            );
          })}
        </div>
      </section>

      <section className="therapy" id="therapy-types">
        <SectionIntro content={servicesTypes.intro} />
        <Folder content={servicesTypes.types} />
      </section>

      <section className="frequency" id="therapy-frequency">
        <SectionIntro content={servicesFrequency.intro} />
        <div className="options-container">
          {servicesFrequency.options.map((option) => {
            return <Tab content={option} key={option.id} />;
          })}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
