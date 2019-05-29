import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li className={styles.item} key={item.label}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);
PricingPlan.deaultProps = { alt: '' };

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
