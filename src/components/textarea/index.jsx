import PropTypes from "prop-types";
import styles from "./textarea.module.scss";

export default function CommonTextArea({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder || "Start typing here... "}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

CommonTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
