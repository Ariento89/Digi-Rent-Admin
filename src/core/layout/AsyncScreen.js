import PropTypes from "prop-types";
import { BLUE_1 } from "../../consts/colors";
import Spinner from "./Spinner";

export default function AsyncScreen(props) {
  return props.isLoading ? (
    <div
      style={{
        display: " flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      <Spinner color={BLUE_1} size="md" />
    </div>
  ) : (
    props.children
  );
}

AsyncScreen.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

AsyncScreen.defaultProps = {
  isLoading: false,
  style: {},
};
