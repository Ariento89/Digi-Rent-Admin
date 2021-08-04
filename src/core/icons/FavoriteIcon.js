import PropTypes from "prop-types";

export default function FavoriteIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65835 14.0917 6.73335L16.75 7.17501C18.45 7.45835 18.85 8.69168 17.625 9.90835L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63333 16.05 9.175 16.3167L6.68333 17.7917C4.9 18.85 3.81667 18.0583 4.28333 16.0417L4.875 13.4833C4.98333 13 4.79167 12.325 4.44167 11.975L2.375 9.90835C1.15833 8.69168 1.55 7.45835 3.25 7.17501L5.90833 6.73335C6.35 6.65835 6.88333 6.26668 7.08333 5.85835L8.55 2.92501C9.35 1.33335 10.65 1.33335 11.4417 2.92501Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

FavoriteIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
