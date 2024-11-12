import Button from "../../components/button";
import Hero from "../../components/hero";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-about-section">
        {/* <div className="row"> */}
        <div className="cell">
          <div className="header-container">
            <span className="corner topLeftCorner"></span>
            <h2>What do we do?</h2>
            <span className="corner topRightCorner"></span>
          </div>
          <div className="content-container">
            <span className="corner bottomLeftCorner"></span>
            <div className="cell-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                temporibus blanditiis eum provident eligendi veniam, culpa hic
                illum.
              </p>
              <Button text="about us" type="link" />
            </div>
            <span className="corner bottomRightCorner"></span>
          </div>
        </div>
        <div className="cell">
          <div className="header-container">
            <span className="corner topLeftCorner"></span>
            <h2>Who are we?</h2>
            <span className="corner topRightCorner"></span>
          </div>
          <div className="content-container">
            <span className="corner bottomLeftCorner"></span>
            <div className="cell-content">
              <p>
                Ex ut voluptas pariatur consequuntur, eius iusto placeat
                maiores. Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Ducimus, nisi eveniet itaque id quisquam consectetur eos! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <Button text="our team" type="link" />
            </div>

            <span className="corner bottomRightCorner"></span>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
