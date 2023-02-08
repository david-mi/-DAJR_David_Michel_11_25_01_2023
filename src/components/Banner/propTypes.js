import PropTypes from "prop-types";

export const BannerPropTypes = {
  title: PropTypes.string,
  image: PropTypes.exact({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};