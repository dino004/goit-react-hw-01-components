// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import data from 'dataFiles/data.json';
import { getRandomHexColor } from '../utils/GenerationColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(data => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            key={data.id}
            className={css.item}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.object,
// };
