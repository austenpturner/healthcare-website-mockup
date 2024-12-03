import "./styles.scss";
import Blocks from "../../components/blocks";
import { blockContent } from "../../config/about";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import ContactSection from "../../components/contactSection";
import Card from "../../components/card";
import { aboutCards } from "../../config/about";
import { aboutContent } from "../../config/about";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="header-container">
        <h1>{aboutContent.hero.header}</h1>
      </div>
      <div className="content-container">
        <Blocks content={blockContent} location="about" />

        <div className="mission-values-container">
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
        </div>
        <div className="approach-container">
          <h2>{aboutContent.approach.header}</h2>
          <p>{aboutContent.approach.content}</p>
          <div className="card-container">
            {aboutCards.map((card) => {
              return <Card content={card} key={card.id} />;
            })}
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
