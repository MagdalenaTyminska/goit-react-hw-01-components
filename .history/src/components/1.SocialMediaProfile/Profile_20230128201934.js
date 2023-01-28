import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class={css.profile}>
    <div class={css.description}>
            <img src={avatar} alt="User avatar" class={css.avatar}/>
            <p class={css.name}>{username}</p>
            <p class={css.tag}>@{tag}</p>
            <p class={css.location}>{location}</p>
    </div>

    <ul class={css.stats}>
      <li>
                <span class={css.label}>{stats.followers}</span>
                <span class={css.quantity}>1000</span>
      </li>
      <li>
        <span class={label">{stats.views}</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">{stats.likes}</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
);

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.object.isRequired,
// };
