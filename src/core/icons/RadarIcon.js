import PropTypes from "prop-types";

export default function RadarIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8 15.6C17.55 14.6 18 13.35 18 12C18 10.65 17.55 9.39999 16.8 8.39999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.20001 8.39999C6.45001 9.39999 6 10.65 6 12C6 13.35 6.45001 14.6 7.20001 15.6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

RadarIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
