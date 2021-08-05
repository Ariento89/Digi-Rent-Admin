import PropTypes from "prop-types";
import SpinnerSvg from "../../assets/svg/spinner.svg";

export default function Spinner({ size }) {
  return (
    <div style={{ width: { xs: "25px", sm: "50px", md: "75px", lg: "100px" }[size] }}>
      <img src={SpinnerSvg} alt="Loading spinner" style={{ width: "100%" }} />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]).isRequired,
};
