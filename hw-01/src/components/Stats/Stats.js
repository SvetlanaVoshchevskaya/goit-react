import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statsList}>
      {stats.map(item => {
        return (
          <li
            style={{ backgroundColor: `${randomColor()}` }}
            className={styles.item}
            key={item.id}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Stats.defaultProps = { title: '' };
Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
