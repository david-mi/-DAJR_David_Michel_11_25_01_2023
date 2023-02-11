import PropTypes from "prop-types";

const dataPropTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
});

export const CollapsesPropTypes = {
  data: PropTypes.arrayOf(dataPropTypes)
};