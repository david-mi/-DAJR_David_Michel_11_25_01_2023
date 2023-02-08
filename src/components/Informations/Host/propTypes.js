import PropTypes from "prop-types";

export const HostPropTypes = {
  host: PropTypes.exact({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};