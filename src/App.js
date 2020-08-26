import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import SelfAuthorizations from './Pages/SelfAuthorizations';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/loading-management/affiliate/:companyCustomerIdName/location" component={SelfAuthorizations} />
      </Switch>
    </Router>
  );
}

export default App;
