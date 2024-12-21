import BottomCorners from "../corners/bottomCorners";
import TopCorners from "../corners/topCorners";
import styles from "./legalPage.module.scss";
import PropTypes from "prop-types";

export default function LegalPage({ content }) {
  return (
    <div className={styles.legalPage}>
      <div className={styles.pageContainer}>
        <TopCorners />
        <div className={styles.pageContent}>
          <h1>{content.heading}</h1>
          <h2>
            {`${content.subheading} `}
            <span>{content.date}</span>
          </h2>
          {content.sections.map((section) => {
            return (
              <div key={section.id}>
                <h3>
                  <span>{`${section.id}. `}</span>
                  {section.heading}
                </h3>
                {section.para && <p>{section.para}</p>}
                {section.listItems && (
                  <ul>
                    {section.listItems.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <BottomCorners />
      </div>
    </div>
  );
}

LegalPage.propTypes = {
  content: PropTypes.object,
};
