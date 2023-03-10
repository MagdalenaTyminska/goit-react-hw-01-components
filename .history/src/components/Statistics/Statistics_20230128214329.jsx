import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title !== undefined && <h2 className={css.title}>{title}</h2>}

    <ul class={css.statList}>
      <li class="item">
        <span class="label">.docx</span>
        <span class="percentage">4%</span>
      </li>
      <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">14%</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
      </li>
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
