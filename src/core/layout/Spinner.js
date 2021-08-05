import PropTypes from "prop-types";
import SpinnerIcon from "../icons/SpinnerIcon";

export default function Spinner({ size, color }) {
  return (
    <div style={{ display: "flex", width: { xs: "25px", sm: "50px", md: "75px", lg: "100px" }[size] }}>
      <SpinnerIcon color={color} />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]).isRequired,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  color: "#fff",
};
