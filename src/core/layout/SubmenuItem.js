import PropTypes from "prop-types";
import { BLUE_1, GREY_5 } from "../../consts/colors";
import Icon from "./Icon";

export default function SubmenuItem({ label, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        padding: "16px 25px 16px 25px ",
      }}
    >
      <Icon name="drag" size="md" color={isActive ? BLUE_1 : GREY_5} />
      <span style={{ marginLeft: "10px", color: isActive ? BLUE_1 : GREY_5 }}>{label}</span>
    </div>
  );
}

SubmenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

SubmenuItem.defaultPros = {
  isActive: false,
};
