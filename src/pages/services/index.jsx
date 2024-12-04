import HeaderContainer from "../../components/headerContainer";
import "./styles.scss";
import viewFromFerry from "../../assets/images/scenery/view-from-ferry.jpg";
import { servicesContent } from "../../config/services";
import { servicesFrequency } from "../../config/services";
import { servicesPlatform } from "../../config/services";
import { servicesTypes } from "../../config/services";
import { useState } from "react";
import { FAQ } from "../../components/FAQ";

export default function ServicesPage() {
  const [selectedTherapyType, setSelectedTherapyType] = useState(1);

  return (
    <div className="services-page">
      <HeaderContainer
        header={servicesContent.hero.header}
        backgroundImg={viewFromFerry}
      />
      <section className="services-intro container">
        <h2>{servicesContent.intro.header}</h2>
        {servicesContent.intro.content.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
        <h4></h4>
      </section>

      <section className="frequency container">
        <h2>{servicesFrequency.header}</h2>
        <p>{servicesFrequency.intro}</p>
        {servicesFrequency.options.map((option) => {
          return (
            <div key={option.id}>
              <h3>{option.type}</h3>
              <p>{option.info}</p>
            </div>
          );
        })}
      </section>

      <section className="platform container">
        <h2>{servicesPlatform.header}</h2>
        <p>{servicesPlatform.intro}</p>
        {servicesPlatform.options.map((option) => {
          return (
            <div className="platform-option" key={option.id}>
              <h3>{option.type}</h3>
              {option.reasons.map((reason) => {
                return (
                  <div className="platform-reason" key={reason.id}>
                    <h4>{reason.type}</h4>
                    <p>{reason.info}</p>
                  </div>
                );
              })}
              <div className="platform-conclusion">
                <h4>{option.conclusion.header}</h4>
                <p>{option.conclusion.details}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="therapy-types container">
        <h2>{servicesTypes.header}</h2>
        <p className="intro">{servicesTypes.intro}</p>
        <div className="description-container">
          <ul className="type-list">
            {servicesTypes.types.map((type) => {
              return (
                <li
                  key={type.id}
                  className={
                    selectedTherapyType === type.id ? "selected-type" : ""
                  }
                  onClick={() => setSelectedTherapyType(type.id)}
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
                  selectedTherapyType === type.id
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
                    {type.uses.useList.map((use) => {
                      return <li key={use.id}>{use}</li>;
                    })}
                  </ul>
                </div>
                <div className="approach">
                  <h4>{type.approach.heading}</h4>
                  <p>{type.approach.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
