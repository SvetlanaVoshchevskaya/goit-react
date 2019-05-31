import React from 'react';
import styles from './Profile.module.css';

const ListItem = props => {
  const { ...stats } = props;
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map(item => (
        <li className={styles.statsItem} key={item[0]}>
          <span className={styles.label}>{item[0]} </span>
          <span className={styles.quantity}>{item[1]} </span>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
