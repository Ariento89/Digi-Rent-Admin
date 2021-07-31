import PropTypes from "prop-types";
import { GREY_6 } from "../../../consts/colors";
import Card from "../../layout/Card";
import AbsoluteValueIndicatorIcon from "./AbsoluteValueIndicatorIcon";

export default function AbsoluteValueIndicator({ icon, label, value, size, primaryColor, secondaryColor }) {
  const valueFontSize = { sm: "24px", md: "36px" }[size];
  const height = { sm: "47px", md: "103px" }[size];
  const marginLeft = { sm: "15px", md: "24px" }[size];
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", height: height }}>
        <div>
          <AbsoluteValueIndicatorIcon name={icon} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: marginLeft }}>
          <span style={{ fontSize: "13px", color: GREY_6, marginBottom: "6px" }}>{label}</span>
          <span style={{ fontSize: valueFontSize, color: "#000", fontFamily: "GothamBold" }}>{value}</span>
        </div>
      </div>
    </Card>
  );
}

AbsoluteValueIndicator.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md"]),
};

AbsoluteValueIndicator.defaultProps = {
  size: "sm",
};
