import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class="css.profile">
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">{stats.views}</span>
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
