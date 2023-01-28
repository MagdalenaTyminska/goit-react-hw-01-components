import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
    return {index % 2 ? {css.colorOdd} : {css.colorEven}}
}

export const Statistics = ({ title, stats }) => (
  <section class={css.statistics}>
    {title !== undefined && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map((stat, index) => (
        <li
          className={css.item}
          key={stat.id}
          className={`index % 2 ? ${css.colorOdd} : ${css.colorEven}`}
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
