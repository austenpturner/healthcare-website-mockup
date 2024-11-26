import "./styles.scss";
import Blocks from "../../components/blocks";
import { blockContent } from "../../config/about";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="header-container">
        <h1>About Us</h1>
      </div>
      <div className="content-container">
        <Blocks content={blockContent} location="about" />
      </div>
    </div>
  );
}
