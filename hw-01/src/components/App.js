import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Stats from './Stats/Stats';
import stats from './Stats/stats.json';
import PricingPlan from './PricingPlan/PricingPlan';
import pricingPlanItems from './PricingPlan/pricing-plan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './TransactionHistory/transaction.json';

const App = () => (
  <Fragment>
    <Profile {...user}> </Profile>
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transaction} />
  </Fragment>
);
export default App;
