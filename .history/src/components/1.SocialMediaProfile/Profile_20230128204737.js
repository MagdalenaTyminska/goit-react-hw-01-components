import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class={css.profile}>
    <div class={css.description}>
      <img src={avatar} alt="User avatar" class={css.avatar} />
      <p class={css.name}>{username}</p>
      <p class={css.tag}>@{tag}</p>
      <p class={css.location}>{location}</p>
    </div>

    <ul class={css.stats}>
      <li>
        <span class={css.label}>{stats.followers}</span>
        <span class={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span class={css.label}>{stats.views}</span>
        <span class={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span class={css.label}>{stats.likes}</span>
        <span class={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
