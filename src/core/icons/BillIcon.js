import PropTypes from "prop-types";

export default function BillIcon({ color }) {
  return (
    <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          d="M4.75256 1.875V10.8525C4.75256 11.5875 5.09756 12.285 5.69006 12.7275L9.59756 15.6525C10.4301 16.275 11.5776 16.275 12.4101 15.6525L16.3176 12.7275C16.9101 12.285 17.2551 11.5875 17.2551 10.8525V1.875H4.75256Z"
          stroke={color}
          strokeWidth="1.125"
          strokeMiterlimit="10"
          shape-rendering="crispEdges"
        />
      </g>
      <path d="M3.5 1.875H18.5" stroke={color} strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" />
      <path
        d="M8 6H14"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.75H14"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0.190063"
          y="1.3125"
          width="21.6275"
          height="23.3694"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

BillIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
