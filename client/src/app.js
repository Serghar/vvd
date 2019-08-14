import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import UserDashboard from './components/user-dashboard';
import Nav from './components/nav';
import PageNotFound from './components/page-not-found';


function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
