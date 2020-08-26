import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:blogId" component={BlogPost} />
      </Switch>
    </Router>
  );
}

export default App;
