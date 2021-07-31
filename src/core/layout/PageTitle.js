import PropTypes from "prop-types";
import { GREY_8 } from "../../consts/colors";

export default function PageTitle({ title }) {
  return <span style={{ color: GREY_8, fontSize: "24px", fontFamily: "GothamMedium" }}>{title}</span>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
