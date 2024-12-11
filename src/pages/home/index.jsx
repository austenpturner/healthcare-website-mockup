import Blocks from "../../components/blocks";
import ContactSection from "../../components/contactSection";
import { FAQ } from "../../components/FAQ";
import Hero from "../../components/hero";
import Intro from "../../components/intro";
import Slider from "../../components/Slider";
import { homeBlocks, homeContent } from "../../config/homePage";
import { questions } from "../../config/questions";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero
        header={homeContent.hero.header}
        backgroundImg={homeContent.hero.backgroundImg}
      />
      <Intro content={homeContent.intro} />
      <div className="home-blocks">
        {homeBlocks.map((block) => {
          return (
            <Blocks
              content={block}
              key={block.id}
              reverse={block.id % 2 === 0 ? "reverse" : "original"}
              maxWidth="largeWidth"
              maxHeight="regularHeight"
              aspectRatio="square"
            />
          );
        })}
      </div>

      <Slider />
      <FAQ
        content={questions}
        alignment="center"
        padding="extra-padding"
        width="partial-width"
      />
      <ContactSection />
    </div>
  );
}
