import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <section className={css.friend}>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={friend.isOnline ? `${css.online}` : `${css.offline}`}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="54"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </section>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
