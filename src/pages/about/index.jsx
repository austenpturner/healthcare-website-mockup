import "./styles.scss";
import Blocks from "../../components/blocks";
import { blockContent } from "../../config/about";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import ContactSection from "../../components/contactSection";
import Card from "../../components/card";
import { aboutCards } from "../../config/about";
import { aboutContent } from "../../config/about";
import Hero from "../../components/hero";
import PageIntro from "../../components/pageIntro";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SectionIntro from "../../components/sectionIntro";

export default function AboutPage() {
  const { uiDispatch } = useContext(UIContext);
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 5% of the component is visible
  });

  return (
    <div className="about-page">
      <Hero
        header={aboutContent.hero.header}
        backgroundImg={aboutContent.hero.backgroundImg}
        fontSize="largeHeader"
      />
      <PageIntro content={aboutContent.intro} />
      <section className="about-blocks">
        <Blocks
          content={blockContent}
          maxWidth="largeWidth"
          maxHeight="tallerHeight"
        />
      </section>

      <section
        className={`${"mission-values-container"} ${
          isVisible ? "visible" : "hidden"
        }`}
        ref={elementRef}
      >
        <div className="mission-container">
          <h2>{aboutContent.mission.header}</h2>
          <div className="quote-container">
            <FaQuoteLeft />
            <p>{aboutContent.mission.content}</p>
            <span></span>
            <FaQuoteRight />
          </div>
        </div>
        <div className="value-container">
          <h2>{aboutContent.values.header}</h2>
          <p>{aboutContent.values.content}</p>
          <span></span>
        </div>
      </section>

      <section className="approach-container">
        <SectionIntro content={aboutContent.approach} alignment={"center"} />

        <div className="card-container">
          {aboutCards.map((card) => {
            return (
              <Card
                content={card}
                key={card.id}
                handleAction={() =>
                  uiDispatch({
                    type: "SET_CURRENT_THERAPY_TYPE_SELECTED",
                    payload: card.id,
                  })
                }
              />
            );
          })}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
