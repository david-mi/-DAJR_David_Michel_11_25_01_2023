import PropTypes from "prop-types";

export const BrowseButtonPropTypes = {
  options: PropTypes.exact({
    handler: PropTypes.func.isRequired,
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    display: PropTypes.bool
  }).isRequired
};