import PropTypes from "prop-types";
import ReactSelect from "react-select";

export default function Select({ options, width, placeholder, value, onChange }) {
  return (
    <div style={{ width: width }}>
      <ReactSelect
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf([
    {
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    },
  ]).isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  placeholder: "",
  value: null,
  onChange: () => {},
};
