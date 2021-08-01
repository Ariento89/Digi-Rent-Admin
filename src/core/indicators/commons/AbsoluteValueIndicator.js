import PropTypes from "prop-types";
import { GREY_6 } from "../../../consts/colors";
import Card from "../../layout/Card";
import AbsoluteValueIndicatorIcon from "./AbsoluteValueIndicatorIcon";

export default function AbsoluteValueIndicator({ icon, label, value, size, primaryColor, secondaryColor }) {
  const valueFontSize = { sm: "24px", md: "36px", lg: "36px" }[size];
  const height = { sm: "47px", md: "103px", lg: "158px" }[size];
  const marginLeft = { sm: "15px", md: "24px", lg: 0 }[size];
  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: size === "lg" ? "flex-start" : "center",
          justifyContent: size === "lg" ? "center" : "flex-start",
          height: height,
          flexDirection: size === "lg" ? "column" : "row",
        }}
      >
        <div>
          <AbsoluteValueIndicatorIcon name={icon} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: size === "lg" ? "column-reverse" : "column",
            justifyContent: "center",
            marginLeft: marginLeft,
          }}
        >
          <span style={{ fontSize: "13px", color: GREY_6, marginBottom: "6px" }}>{label}</span>
          <span
            style={{
              fontSize: valueFontSize,
              color: "#000",
              fontFamily: "GothamBold",
              margin: size === "lg" ? "25px 0" : 0,
            }}
          >
            {value}
          </span>
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
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

AbsoluteValueIndicator.defaultProps = {
  size: "sm",
};
