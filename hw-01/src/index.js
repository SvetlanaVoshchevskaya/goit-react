import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Profile, { user } from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import stats from './components/Stats/stats.json';
import PricingPlan from './components/PricingPlan/PricingPlan';
import pricingPlanItems from './components/PricingPlan/pricing-plan.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './components/TransactionHistory/transaction.json';

ReactDOM.render(
  <Fragment>
    <Profile {...user} />,
    <Stats title="Upload stats" stats={stats} />,
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transaction} />
  </Fragment>,
  document.getElementById('root'),
);
