import React from 'react';
import { Route, Switch } from 'react-router';

import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import ModelerPage from './pages/ModelerPage';
import FrameworksPage from './pages/FrameworksPage';

const App = () => {
  return (
    <>
      {/* render a navigation component */}
      <header>
        <Navigation />
      </header>
      {/* render routing logic of react-router-dom */}
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/modeler" component={ModelerPage} />
          <Route exact path="/frameworks" component={FrameworksPage} />
        </Switch>
      </main> 
    </>
  );
};

export default App;
