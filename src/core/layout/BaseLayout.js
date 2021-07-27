import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function BaseLayout({ children }) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
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
          },
          {
            label: "Properties",
            url: "/properties",
            icon: "properties",
          },
          {
            label: "Payments",
            url: "/payments",
            icon: "receipt",
          },
          {
            label: "Contract",
            url: "/contract",
            icon: "bill",
          },
          {
            label: "Blog",
            url: "/blog",
            icon: "keyboard",
          },
        ]}
      />
      <div style={{ width: "100%" }}>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

BaseLayout.defaultProps = {
  children: PropTypes.node,
};
