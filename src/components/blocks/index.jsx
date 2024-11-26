import ContentBlock from "../contentBlock";
import styles from "./blocks.module.scss";
import PropTypes from "prop-types";

export default function Blocks({ content, location }) {
  return (
    <div className={`${styles.blocksContainer} ${styles[location]}`}>
      {content.map((block) => {
        return (
          <div key={block.id} className={styles.row}>
            <ContentBlock content={block} location={location} />
            <img src={block.img.src} alt={block.img.alt} />
          </div>
        );
      })}
    </div>
  );
}

Blocks.propTypes = {
  content: PropTypes.array,
  location: PropTypes.string,
};
