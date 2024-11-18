import PropTypes from "prop-types";
import styles from "./input.module.scss";

export default function CommonInput({
  label,
  name,
  id,
  value,
  placeholder,
  onChange,
  type,
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here... "}
        value={value}
        onChange={onChange}
        pattern={type === "tel" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : null}
      />
    </div>
  );
}

CommonInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
