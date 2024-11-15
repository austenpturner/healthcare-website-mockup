import ContentBlock from "../contentBlock";
import styles from "./blocks.module.scss";
import PropTypes from "prop-types";

export default function Blocks({ content }) {
  return (
    <div className={styles.blocksContainer}>
      {content.map((block) => {
        return (
          <div key={block.id} className={styles.row}>
            <ContentBlock content={block} />
            <img src={block.img.src} alt={block.img.alt} />
          </div>
        );
      })}
    </div>
  );
}

Blocks.propTypes = {
  content: PropTypes.array,
};
