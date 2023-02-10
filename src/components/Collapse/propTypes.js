import PropTypes from "prop-types";

export const CollapsePropTypes = {
  name: PropTypes.string.isRequired,
  showByDefault: PropTypes.bool,
  children: PropTypes.element.isRequired
};