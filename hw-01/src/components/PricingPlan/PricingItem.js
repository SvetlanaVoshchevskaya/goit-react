import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <img className={styles.icon} src={icon} alt={label} />
    <h2 className={styles.label}> {label}</h2>
    <p className={styles.capacity}> {capacity} STORAGE</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO </p>
    <button className={styles.button} type="button">
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default PricingItem;
