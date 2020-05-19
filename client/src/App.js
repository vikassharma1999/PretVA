import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Landing from './components/layout/Landing';
import ViewProfile from './components/ViewProfile';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/profile/me' component={ViewProfile} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
