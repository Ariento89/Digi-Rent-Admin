import PropTypes from "prop-types";
import { DANGER, GREY_2, GREY_9 } from "../../consts/colors";

export default function TextInput({
  label,
  fieldType,
  type,
  isDisabled,
  placeholder,
  value,
  required,
  onChange,
  errorText,
}) {
  return fieldType === "input" ? (
    <label style={{ marginBottom: "8px", display: "block" }}>
      <span style={{ marginBottom: "8px", marginLeft: "3px", display: "block", fontSize: "13px" }}>
        {label}
        <span style={{ color: DANGER, marginLeft: "3px" }}>{required && "*"}</span>
      </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "10px",
          fontWeight: 300,
          color: GREY_9,
          fontSize: "14px",
          outline: "none",
          border: `1px solid ${GREY_2}`,
          borderRadius: "4px",
          opacity: isDisabled ? 0.6 : 1,
          cursor: isDisabled ? "not-allowed" : "auto",
        }}
      />
      <span
        style={{
          position: "absolute",
          fontSize: "13px",
          display: "block",
          marginTop: "2px",
          marginLeft: "3px",
          color: DANGER,
        }}
      >
        {errorText}
      </span>
    </label>
  ) : (
    <div />
  );
}

TextInput.propTypes = {
  fieldType: PropTypes.oneOf(["input", "textarea"]),
  type: PropTypes.oneOf(["text", "password", "number", "email"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isDisabled: PropTypes.bool,
};

TextInput.defaultProps = {
  fieldType: "input",
  type: "text",
  placeholder: null,
  value: null,
  required: false,
  isDisabled: false,
  errorText: null,
  onChange: () => false,
};
