import Blocks from "../../components/blocks";
import ContactSection from "../../components/contactSection";
import { FAQ } from "../../components/FAQ";
import Hero from "../../components/hero";
import Slider from "../../components/Slider";
import { blockContent, heroContent } from "../../config/homePage";
import { questions } from "../../config/questions";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero content={heroContent} location="home" />
      <Blocks content={blockContent} location="home" />
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
