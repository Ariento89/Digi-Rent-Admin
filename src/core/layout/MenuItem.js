import PropTypes from "prop-types";
import { GREY_3, GREY_4, PRIMARY } from "../../consts/colors";
import Icon from "./Icon";
import SubmenuItem from "./SubmenuItem";

export default function MenuItem({ label, url, icon, children, isActive, onClick }) {
  return (
    <div>
      <div
        onClick={() => onClick(url)}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          borderRadius: "7px",
          padding: "14px 12px",
          backgroundImage: isActive ? PRIMARY : "",
          margin: "5px 0",
        }}
      >
        <div style={{ display: "flex" }}>
          <Icon name={icon} color={isActive ? "#fff" : GREY_3} />
          <span style={{ marginLeft: "15px", color: isActive ? "#fff" : GREY_3 }}>{label}</span>
        </div>
        {children.length > 0 && (
          <div
            style={{
              transform: !isActive ? "rotate(180deg)" : "none",
              transition: "all .5 ease-in-out",
            }}
          >
            <Icon name="arrow-up" color={isActive ? "#fff" : GREY_3} />
          </div>
        )}
      </div>
      {children.length > 0 && (
        <div
          style={{
            width: "100%",
            height: "auto",
            maxHeight: isActive ? "400px" : 0,
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
            cursor: "pointer",
            borderRadius: "7px",
            backgroundColor: GREY_4,
            transition: "all .5 ease-in-out",
          }}
        >
          {children.map((item) => (
            <SubmenuItem label={item.label} url={item.url} isActive={false} onClick={() => onClick(url + item.url)} />
          ))}
        </div>
      )}
    </div>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.array,
};

MenuItem.defaultProps = {
  isActive: false,
  url: "",
  children: [],
};
