import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
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
const Profile = props => {
  const { avatar, name, tag, location, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="user avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ListItem {...stats} />
    </div>
  );
};
Profile.defaultProps = { alt: 'user avatar' };

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  alt: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
