import Blocks from "../../components/blocks";
import ContactSection from "../../components/contactSection";
import { FAQ } from "../../components/FAQ";
import Hero from "../../components/hero";
import Slider from "../../components/Slider";
import { blockContent, heroContent } from "../../config/homePage";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero content={heroContent} location="home" />
      <Blocks content={blockContent} location="home" />
      <Slider />
      <FAQ />
      <ContactSection />
    </div>
  );
}
