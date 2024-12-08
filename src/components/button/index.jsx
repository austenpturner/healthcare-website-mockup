import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function Button({
  type,
  action,
  handleAction,
  item,
  text,
  icon,
  phoneNumber,
  link,
}) {
  const actionBtnContent = (
    <>
      <span>{text && text}</span>
      {icon && icon}
    </>
  );

  return (
    <button
      className={type}
      onClick={handleAction ? () => handleAction(item, action) : null}
      //   tabIndex={getTabIndex()}
    >
      {type === "schedule" && (
        <a href={`tel:${phoneNumber}`}>
          <span>{text && text}</span>
          {icon && icon}
        </a>
      )}
      {type === "link" && <Link to={link}>{text}</Link>}
      {handleAction && actionBtnContent}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.string,
  handleAction: PropTypes.func,
  item: PropTypes.object,
  icon: PropTypes.element,
  phoneNumber: PropTypes.string,
  link: PropTypes.string,
};
