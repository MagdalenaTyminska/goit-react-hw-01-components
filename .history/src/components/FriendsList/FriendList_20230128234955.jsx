import css from './FriendList.module.css';
import PropTypes from 'prop-types';
FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.array.isRequired,
};