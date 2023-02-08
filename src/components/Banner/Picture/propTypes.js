import PropTypes from "prop-types";

export const PicturePropTypes = {
  image: PropTypes.exact({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};