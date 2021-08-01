import PropTypes from "prop-types";
import ReactSelect from "react-select";

export default function Select({ options, width }) {
  return (
    <div style={{ width: width }}>
      <ReactSelect style={{ width: "100%" }} options={options} placeholder="Filter..." />
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
};
