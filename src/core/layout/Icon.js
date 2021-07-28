import PropTypes from "prop-types";
import HomeIcon from "../icons/HomeIcon";
import UsersIcon from "../icons/UsersIcon";
import PropertiesIcon from "../icons/PropertiesIcon";
import ReceiptIcon from "../icons/ReceiptIcon";
import BillIcon from "../icons/BillIcon";
import KeyboardIcon from "../icons/KeyboardIcon";
import LoginIcon from "../icons/LoginIcon";
import DragIcon from "../icons/DragIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import TickSquareIcon from "../icons/TickSquareIcon";
import RadarIcon from "../icons/RadarIcon";
import InboxIcon from "../icons/InboxIcon";

export default function Icon({ name, size, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { sm: "18px", md: "24px" }[size],
      }}
    >
      {name === "home" && <HomeIcon color={color} />}
      {name === "users" && <UsersIcon color={color} />}
      {name === "properties" && <PropertiesIcon color={color} />}
      {name === "receipt" && <ReceiptIcon color={color} />}
      {name === "bill" && <BillIcon color={color} />}
      {name === "keyboard" && <KeyboardIcon color={color} />}
      {name === "login" && <LoginIcon color={color} />}
      {name === "drag" && <DragIcon color={color} />}
      {name === "arrow-up" && <ArrowUpIcon color={color} />}
      {name === "tick-square" && <TickSquareIcon color={color} />}
      {name === "radar" && <RadarIcon color={color} />}
      {name === "inbox" && <InboxIcon color={color} />}
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    "home",
    "users",
    "properties",
    "receipt",
    "bill",
    "keyboard",
    "login",
    "drag",
    "arrow-up",
    "tick-square",
    "radar",
    "inbox",
  ]).isRequired,
  size: PropTypes.oneOf(["sm", "md"]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "sm",
  color: "#fff",
};
