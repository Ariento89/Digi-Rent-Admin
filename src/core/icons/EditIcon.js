import PropTypes from "prop-types";

export default function EditIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path
          d="M9.16667 1.66666H7.5C3.33333 1.66666 1.66667 3.33332 1.66667 7.49999V12.5C1.66667 16.6667 3.33333 18.3333 7.5 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5V10.8333"
          stroke={color}
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3667 2.51666L6.8 9.08333C6.55 9.33333 6.3 9.825 6.25 10.1833L5.89167 12.6917C5.75834 13.6 6.4 14.2333 7.30834 14.1083L9.81667 13.75C10.1667 13.7 10.6583 13.45 10.9167 13.2L17.4833 6.63333C18.6167 5.5 19.15 4.18333 17.4833 2.51666C15.8167 0.849997 14.5 1.38333 13.3667 2.51666Z"
          stroke={color}
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.425 3.45831C12.9833 5.44998 14.5417 7.00831 16.5417 7.57498"
          stroke={color}
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

EditIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
