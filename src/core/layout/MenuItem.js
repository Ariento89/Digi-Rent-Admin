import PropTypes from "prop-types";
import { GREY_3, PRIMARY } from "../../consts/colors";
import Icon from "./Icon";

export default function MenuItem({ label, url, icon, isActive, onClick }) {
  return (
    <div
      onClick={() => onClick(url)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "7px",
        padding: "14px 12px",
        margin: "5px 0",
        backgroundImage: isActive ? PRIMARY : "",
      }}
    >
      <Icon name={icon} color={isActive ? "#fff" : GREY_3} />
      <span style={{ marginLeft: "15px", color: isActive ? "#fff" : GREY_3 }}>{label}</span>
    </div>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
  isActive: false,
};
