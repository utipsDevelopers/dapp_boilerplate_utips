import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReportingPanelPage from './pages/ReportingPanelPage';
import TrackingPanelPage from './pages/TrackingPanelPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ReportingPanelPage}/>
      <Route exact path="/tracking" component={TrackingPanelPage}/>
    </Switch>
  </Router>
);

export default Routes;
