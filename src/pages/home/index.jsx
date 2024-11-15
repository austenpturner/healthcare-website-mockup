import Blocks from "../../components/blocks";
import Hero from "../../components/hero";
import Slider from "../../components/Slider";
import { blockContent } from "../../config/homePage";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Blocks content={blockContent} />
      {/* <div className="grid">
        <div>
          <img src="src/assets/images/people/man-in-sun.jpg" alt="man in sun" />
        </div>

        <div>
          <img
            src="src/assets/images/people/women-smiling.jpg"
            alt="women smiling at each other"
          />
        </div>
      </div> */}
      <Slider />
    </div>
  );
}
