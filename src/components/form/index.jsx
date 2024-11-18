import CommonInput from "../input";
import PropTypes from "prop-types";
import CommonTextArea from "../textarea";
import CommonSelect from "../select";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXT_AREA: "textarea",
};

export default function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      case formTypes.TEXT_AREA:
        content = (
          <CommonTextArea
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      case formTypes.SELECT:
        content = (
          <CommonSelect
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            options={getCurrentElement.options}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;
    }

    return content;
  }

  return (
    <form action="" onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((formElementItem) => {
            return (
              <div key={formElementItem.id}>
                {renderFormElement(formElementItem)}
              </div>
            );
          })
        : null}
      <div>
        <button type="submit" className="submit">
          {buttonText || "submit"}
        </button>
      </div>
    </form>
  );
}

CommonForm.propTypes = {
  formControls: PropTypes.array,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  buttonText: PropTypes.string,
  onHandleSubmit: PropTypes.func,
};
