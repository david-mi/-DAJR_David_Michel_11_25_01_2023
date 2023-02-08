import PropTypes from "prop-types";

export const PicturePropTypes = {
  host: PropTypes.exact({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};