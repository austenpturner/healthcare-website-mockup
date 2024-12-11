import { useState } from "react";
import styles from "./faq.module.scss";
import { GoPlusCircle, GoXCircle } from "react-icons/go";
import PropTypes from "prop-types";
import Button from "../button";

export function FAQ({ content, alignment, width, padding }) {
  const [currentId, setCurrentId] = useState(null);

  return (
    <section
      className={`${styles.faqSection} ${styles[alignment]} ${styles[padding]}`}
    >
      {content.header && <h2>{content.header}</h2>}
      {content.questions.map((pair) => {
        return (
          <div
            key={pair.id}
            className={`${styles.faqContainer} ${styles[width]}`}
          >
            <div className={styles.question}>
              <p>{pair.question}</p>
              {pair.id === currentId ? (
                <GoXCircle onClick={() => setCurrentId(null)} />
              ) : (
                <GoPlusCircle onClick={() => setCurrentId(pair.id)} />
              )}
            </div>
            <div
              className={
                pair.id === currentId
                  ? `${styles.dropDown}`
                  : `${styles.dropDown} ${styles.hidden}`
              }
            >
              <p>{pair.answer}</p>
              {pair.button && (
                <Button
                  type={pair.button.type}
                  text={pair.button.text}
                  link={pair.button.link}
                />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

FAQ.propTypes = {
  content: PropTypes.object,
  alignment: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
};
