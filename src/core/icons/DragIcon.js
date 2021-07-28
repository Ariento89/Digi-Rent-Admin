import PropTypes from "prop-types";

export default function DragIcon({ color }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="1" r="1" fill={color} />
      <circle cx="1" cy="1" r="1" fill={color} />
      <circle cx="1" cy="7" r="1" fill={color} />
      <circle cx="7" cy="7" r="1" fill={color} />
    </svg>
  );
}

DragIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
