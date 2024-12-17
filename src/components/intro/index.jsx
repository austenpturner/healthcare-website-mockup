import PropTypes from "prop-types";
import styles from "./intro.module.scss";

export default function Intro({ content }) {
  return (
    <section className={styles.intro}>
      <h2>{content.header}</h2>
      {content.secondHeader && <h3>{content.secondHeader}</h3>}
      <p>{content.para}</p>
    </section>
  );
}

Intro.propTypes = {
  content: PropTypes.object,
};
