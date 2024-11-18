import PropTypes from "prop-types";
import styles from "./select.module.scss";

export default function CommonSelect({
  label,
  name,
  id,
  value,
  onChange,
  options,
}) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={name}>{label}</label>
      <select id={id} name={name} onChange={onChange} value={value}>
        <option value="">-- Please choose an option --</option>
        {options?.length
          ? options.map((optionItem, index) => {
              return (
                <option key={index} value={optionItem.value}>
                  {optionItem.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
}

CommonSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
