import PropTypes from "prop-types";

export default function Separator(props) {
  return (
    <div
      style={{
        height: {
          xxs: 5,
          xs: 10,
          sm: 15,
          md: 20,
          lg: 40,
          xl: 50,
          xxl: 60,
          xxxl: 70,
        }[props.size],
        width: {
          xxs: 5,
          xs: 10,
          sm: 15,
          md: 20,
          lg: 40,
          xl: 50,
          xxl: 60,
          xxxl: 70,
        }[props.size],
      }}
    />
  );
}

Separator.propTypes = {
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]),
};

Separator.defaultProps = {
  size: "sm",
};
