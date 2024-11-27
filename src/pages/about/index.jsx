import "./styles.scss";
import Blocks from "../../components/blocks";
import { blockContent } from "../../config/about";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="header-container">
        <h1>About Us</h1>
      </div>
      <div className="content-container">
        <Blocks content={blockContent} location="about" />

        <div className="mission-values-container">
          <div className="mission-container">
            <h2>Our Mission:</h2>
            <div className="quote-container">
              <FaQuoteLeft />
              {/* <div> */}
              <p>
                To provide exceptional care that inspires growth and healing.
              </p>
              <span></span>
              {/* </div> */}
              <FaQuoteRight />
            </div>
          </div>

          <div className="value-container">
            <h2>Our Values:</h2>
            <p>Compassion, Inclusivity, & Professionalism</p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
