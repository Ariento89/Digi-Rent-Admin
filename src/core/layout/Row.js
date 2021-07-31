import PropTypes from "prop-types";

export default function Row({ children, onClick, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "15px",
        flexDirection: "row",
        ...rest,
      }}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Row.defaultProps = {
  onClick: () => false,
};
