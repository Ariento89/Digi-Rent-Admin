import PropTypes from "prop-types";
import ReactSelect from "react-select";

export default function Select({ options }) {
  return <ReactSelect style={{ width: "100%" }} options={options} placeholder="Filter..." />;
}

Select.propTypes = {
  options: PropTypes.arrayOf([
    {
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    },
  ]).isRequired,
};
