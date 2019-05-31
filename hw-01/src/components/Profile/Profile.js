import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './Profile.module.css';

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
