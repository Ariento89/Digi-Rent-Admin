import PropTypes from "prop-types";
import styled from "styled-components";
import { BLUE_1 } from "../../consts/colors";
import Spinner from "./Spinner";

const AsyncContent = styled.div`
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: all 0.25s ease-in;
`;

export default function AsyncScreen(props) {
  return (
    <>
      {props.isLoading && (
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
      )}
      <AsyncContent isLoading={props.isLoading}>{props.isLoading ? null : props.children}</AsyncContent>
    </>
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
