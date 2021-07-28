import PropTypes from "prop-types";
import { GREY_6 } from "../../consts/colors";
import Card from "../layout/Card";
import AbsoluteValueIndicatorIcon from "./AbsoluteValueIndicatorIcon";

export default function AbsoluteValueIndicator({ icon, label, value, primaryColor, secondaryColor }) {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <AbsoluteValueIndicatorIcon name={icon} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "15px" }}>
          <span style={{ fontSize: "13px", color: GREY_6, marginBottom: "6px" }}>{label}</span>
          <span style={{ fontSize: "24px", color: "#000", fontFamily: "GothamBold" }}>{value}</span>
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
};
