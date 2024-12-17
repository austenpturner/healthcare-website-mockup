import Hero from "../../components/hero";
// import Card from "../../components/card";
import "./styles.scss";
import { servicesContent } from "../../config/services";
import { servicesFrequency } from "../../config/services";
import { servicesPlatform } from "../../config/services";
import { servicesTypes } from "../../config/services";
import { useContext, useState } from "react";
import { FAQ } from "../../components/FAQ";
import Blocks from "../../components/blocks";
import Intro from "../../components/intro";
import ContactSection from "../../components/contactSection";
import { UIContext } from "../../context/uiContext";
import TopCorners from "../../components/corners/topCorners";
import BottomCorners from "../../components/corners/bottomCorners";

export default function ServicesPage() {
  const { state, uiDispatch } = useContext(UIContext);
  const [highlightedFrequency, setHighlightedFrequency] = useState(1);

  return (
    <div className="services-page">
      <Hero
        header={servicesContent.hero.header}
        backgroundImg={servicesContent.hero.backgroundImg}
        fontSize="largeHeader"
      />
      <Intro content={servicesContent.intro} />

      <section className="platform" id="therapy-platforms">
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

      <section className="therapy" id="therapy-types">
        <div className="section-intro">
          <h2>{servicesTypes.header}</h2>
          <p className="intro">{servicesTypes.para}</p>
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
                  <FAQ content={type} color="offWhite" />
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

      <section className="frequency" id="therapy-frequency">
        <div className="section-intro">
          <h2>{servicesFrequency.header}</h2>
          <p className="intro">{servicesFrequency.para}</p>
        </div>
        <div className="options-container">
          {servicesFrequency.options.map((option) => {
            return (
              <div
                key={option.id}
                id={option.id === 1 ? "left" : "right"}
                className={
                  highlightedFrequency === option.id
                    ? "option bringToFront"
                    : "option"
                }
                onMouseEnter={() => setHighlightedFrequency(option.id)}
              >
                <TopCorners />
                <h3>{option.heading}</h3>
                <p>{option.description}</p>
                <BottomCorners />
              </div>
            );
          })}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
