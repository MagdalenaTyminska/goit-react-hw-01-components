import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => (
  <section class={css.statistics}>
    {title !== undefined && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map((stat, index) => (
        <li
          { index % 2 ? className={css.colorOdd} : className={css.colorEven}}
          key={stat.id}
        >
          <span className={css.label}> {stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
