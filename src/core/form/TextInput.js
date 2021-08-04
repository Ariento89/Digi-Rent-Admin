import PropTypes from "prop-types";
import { DANGER, GREY_2, GREY_9 } from "../../consts/colors";

export default function TextInput({ label, fieldType, type, placeholder, value, required }) {
  return fieldType === "input" ? (
    <label>
      <span style={{ marginBottom: "8px", marginLeft: "3px", display: "block", fontSize: "13px" }}>
        {label}
        <span style={{ color: DANGER, marginLeft: "3px" }}>{required && "*"}</span>
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
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
        }}
      />
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
};

TextInput.defaultProps = {
  fieldType: "input",
  type: "text",
  placeholder: null,
  value: null,
  required: false,
};
