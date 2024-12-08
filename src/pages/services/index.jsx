import Hero from "../../components/hero";
import "./styles.scss";
import viewFromFerry from "../../assets/images/scenery/view-from-ferry.jpg";
import { servicesContent } from "../../config/services";
// import { servicesFrequency } from "../../config/services";
import { servicesPlatform } from "../../config/services";
import { servicesTypes } from "../../config/services";
import { useContext } from "react";
import { FAQ } from "../../components/FAQ";
import Blocks from "../../components/blocks";
import Intro from "../../components/intro";
// import Card from "../../components/card";
import ContactSection from "../../components/contactSection";
import { UIContext } from "../../context/uiContext";

export default function ServicesPage() {
  // const [, setSelectedTherapyType] = useState(1);
  const { state, uiDispatch } = useContext(UIContext);

  return (
    <div className="services-page">
      <Hero
        header={servicesContent.hero.header}
        backgroundImg={viewFromFerry}
        fontSize="largeHeader"
      />
      <Intro content={servicesContent.intro} />

      <section className="platform">
        <div className="section-intro">
          <h2>{servicesPlatform.header}</h2>
          <p className="intro">{servicesPlatform.intro}</p>
        </div>
        <div className="services-blocks">
          {servicesPlatform.options.map((option) => {
            return (
              <Blocks
                content={option}
                key={option.id}
                reverse={option.id % 2 === 0 ? "reverse" : ""}
                maxWidth="largeWidth"
                maxHeight="regularHeight"
              />
            );
          })}
        </div>
      </section>

      <section className="therapy">
        <div className="section-intro">
          <h2>{servicesTypes.header}</h2>
          <p>{servicesTypes.para}</p>
        </div>
        <div className="description-container">
          <ul className="type-list">
            {servicesTypes.types.map((type) => {
              return (
                <li
                  key={type.id}
                  className={
                    state.currentTherapyTypeSelected === type.id
                      ? "selected-type"
                      : ""
                  }
                  onClick={() =>
                    uiDispatch({
                      type: "SET_CURRENT_THERAPY_TYPE_SELECTED",
                      payload: type.id,
                    })
                  }
                >
                  {type.abbr}
                </li>
              );
            })}
          </ul>
          {servicesTypes.types.map((type) => {
            return (
              <div
                className={
                  state.currentTherapyTypeSelected === type.id
                    ? "therapy-type show-type"
                    : "therapy-type"
                }
                key={type.id}
              >
                <div>
                  <h3>{type.type}</h3>
                  <FAQ content={type} />
                </div>
                <div className="uses">
                  <h4>{type.uses.heading}</h4>
                  <ul>
                    {type.uses.useList.map((use, index) => {
                      return <li key={index}>{use}</li>;
                    })}
                  </ul>
                </div>
                <div className="approach-container">
                  <h4>{type.approach.heading}</h4>
                  <p className="approach">{type.approach.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="frequency">
        <div className="section-intro">
          <h2>{servicesFrequency.header}</h2>
          <p>{servicesFrequency.para}</p>
        </div>
        <div className="card-container">
          {servicesFrequency.cards.map((card) => {
            return <Card content={card} key={card.id} />;
          })}
        </div>
      </section> */}
      <ContactSection />
    </div>
  );
}
