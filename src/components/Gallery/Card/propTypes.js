import PropTypes from "prop-types";

export const CardPropTypes = {
  lodging: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};