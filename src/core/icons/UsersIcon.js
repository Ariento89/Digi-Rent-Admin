import PropTypes from "prop-types";

export default function UsersIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.86998 8.15253C6.79498 8.14503 6.70498 8.14503 6.62248 8.15253C4.83748 8.09253 3.41998 6.63003 3.41998 4.83003C3.41998 2.99253 4.90498 1.50003 6.74998 1.50003C8.58748 1.50003 10.08 2.99253 10.08 4.83003C10.0725 6.63003 8.65498 8.09253 6.86998 8.15253Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3075 3.00003C13.7625 3.00003 14.9325 4.17753 14.9325 5.62503C14.9325 7.04253 13.8075 8.19753 12.405 8.25003C12.345 8.24253 12.2775 8.24253 12.21 8.25003"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.11998 10.92C1.30498 12.135 1.30498 14.115 3.11998 15.3225C5.18248 16.7025 8.56498 16.7025 10.6275 15.3225C12.4425 14.1075 12.4425 12.1275 10.6275 10.92C8.57248 9.54753 5.18998 9.54753 3.11998 10.92Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.755 15C14.295 14.8875 14.805 14.67 15.225 14.3475C16.395 13.47 16.395 12.0225 15.225 11.145C14.8125 10.83 14.31 10.62 13.7775 10.5"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

UsersIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
