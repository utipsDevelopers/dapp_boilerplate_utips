import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReportingPanelPage from './pages/ReportingPanelPage';
import TrackingPanelPage from './pages/TrackingPanelPage';
import LoginPage from './pages/LoginPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage}/>
      <Route exact path="/reporting" component={ReportingPanelPage}/>
      <Route exact path="/tracking" component={TrackingPanelPage}/>
    </Switch>
  </Router>
);

export default Routes;
