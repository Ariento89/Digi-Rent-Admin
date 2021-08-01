import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function BaseLayout({ children }) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row", overflow: "hidden" }}>
      <Sidebar
        menuItems={[
          {
            label: "Dashboard",
            url: "/",
            icon: "home",
          },
          {
            label: "Users",
            url: "/users",
            icon: "users",
            children: [
              {
                label: "Landlords",
                url: "/landlords",
              },
              {
                label: "Tenants",
                url: "/tenants",
              },
            ],
          },
          {
            label: "Properties",
            url: "/properties",
            icon: "properties",
          },
          {
            label: "Amenities",
            url: "/amenities",
            icon: "receipt",
          },
        ]}
      />
      <div style={{ width: "calc(100% - 222px)" }}>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

BaseLayout.defaultProps = {
  children: PropTypes.node,
};
