import { head } from "lodash";
import PropTypes from "prop-types";
import { useState } from "react";
import DigiRentLogo from "../../assets/images/logo.png";
import browserHistory from "../../browserHistory";
import { GREY_2 } from "../../consts/colors";
import MenuItem from "../layout/MenuItem";

export default function Sidebar({ menuItems }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  useState(() => {
    setActiveMenuItem(browserHistory.location.pathname);
  }, []);

  const handleLogout = () => {};

  const handleClick = (url) => {
    const menuItem = menuItems.find((item) => item.url === url);
    if (!menuItem?.children) {
      browserHistory.push(url);
    }
    // the url.split() here is  to keep submenus open when clicked,
    // e.g.: in /users/tentants we get only the "/users" part of the url
    const splittedUrl = url.split("/");
    let path = splittedUrl[1];
    if (splittedUrl.length === 1) {
      path = splittedUrl[0];
    }
    setActiveMenuItem(`/${path}`);
  };

  return (
    <div
      style={{
        maxWidth: "222px",
        height: "100vh",
        padding: "16px",
        borderRight: `2px solid ${GREY_2}`,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>
        <div style={{ cursor: "pointer" }} onClick={() => browserHistory.push("/")}>
          <img src={DigiRentLogo} alt="Digi Rent Logo" width="100%" />
        </div>
        <div style={{ width: "100%", marginTop: "20px" }}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={`menu-item-${index}`}
              url={item.url}
              icon={item.icon}
              label={item.label}
              children={item.children}
              onClick={handleClick}
              isActive={item.url === activeMenuItem}
            />
          ))}
        </div>
      </div>
      <MenuItem
        key="menu-item-logout"
        url="/login"
        icon="login"
        label="Log Out"
        onClick={handleLogout}
        isActive={false}
      />
    </div>
  );
}

Sidebar.propTypes = {
  menuItems: PropTypes.array,
};

Sidebar.defaultProps = {
  menuItems: [],
};
