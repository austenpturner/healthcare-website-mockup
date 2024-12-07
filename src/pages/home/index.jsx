import Blocks from "../../components/blocks";
import Button from "../../components/button";
import ContactSection from "../../components/contactSection";
import { FAQ } from "../../components/FAQ";
import HeaderContainer from "../../components/headerContainer";
import Intro from "../../components/intro";
import Slider from "../../components/Slider";
import { homeBlocks, homeContent } from "../../config/homePage";
import { questions } from "../../config/questions";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeaderContainer
        header={homeContent.hero.header}
        backgroundImg={homeContent.hero.backgroundImg}
        fontSize="smallHeader"
      />
      <Intro content={homeContent.intro} />
      <div className="cta">
        <Button
          text={homeContent.ctaButton.text}
          type={homeContent.ctaButton.type}
          icon={<homeContent.ctaButton.icon />}
          phoneNumber={homeContent.ctaButton.phoneNumber}
        />
      </div>
      <div className="home-blocks">
        {homeBlocks.map((block) => {
          return (
            <Blocks
              content={block}
              key={block.id}
              reverse={block.id % 2 === 0 ? "reverse" : "original"}
              maxWidth="mediumWidth"
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
