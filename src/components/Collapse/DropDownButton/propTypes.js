import PropTypes from "prop-types";

export const DropDownButtonPropTypes = {
  name: PropTypes.string.isRequired,
  showContent: PropTypes.bool.isRequired,
  setShowContent: PropTypes.func.isRequired
};