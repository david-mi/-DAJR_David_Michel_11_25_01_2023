import PropTypes from "prop-types";

const datasPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.exact({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired
  })
);

export const GalleryPropTypes = {
  fetchInfos: PropTypes.exact({
    data: datasPropTypes,
    error: PropTypes.instanceOf(Error),
    isWaitingFetch: PropTypes.bool.isRequired
  }).isRequired
};