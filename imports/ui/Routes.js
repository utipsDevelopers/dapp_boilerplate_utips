import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GeneralPanelPage from './pages/GeneralPanelPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={GeneralPanelPage}/>
    </Switch>
  </Router>
);

export default Routes;
