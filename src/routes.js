import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Historic from './pages/Historic';
import HowToUse from './pages/HowToUse';
import Quotation from './pages/Quotation';
import WhereToUse from './pages/WhereToUse';
import HowToEarn from './pages/HowToEarn/'

export default function Routes() {
  return (
    <Switch>
      <Route path={['/', '/historic']} exact component={Historic} />

      <Route path="/about" exact component={About} />

      <Route path="/about/how-to-earn" component={HowToEarn} />
      <Route path="/about/how-to-use" component={HowToUse} />
      <Route path="/about/where-to-use" component={WhereToUse} />

      <Route path="/quotation" component={Quotation} />
    </Switch>
  );
}
