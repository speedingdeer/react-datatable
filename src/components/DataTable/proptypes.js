import PropTypes from 'prop-types';

export const columns = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired
}));