import PropTypes from "prop-types";
import { GREY_1 } from "../../consts/colors";

export default function Content({ children }) {
  return (
    <div
      style={{
        padding: "40px",
        height: "100%",
        minHeight: "calc(100vh - 80px)",
        backgroundColor: GREY_1,
      }}
    >
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};
