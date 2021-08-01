import { range } from "lodash";
import PropTypes from "prop-types";

export default function Column({ size, children }) {
  return (
    <div
      className="core-column"
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "24px",
        width: `calc((100% / 12) * ${size})`,
      }}
    >
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
};

Column.defaultProps = {
  size: PropTypes.oneOf(range(1, 12)).isRequired,
};
