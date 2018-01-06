import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import SpaPage from './pages/SpaPage';
import SpaWebSockApp from './SpaWebSockApp';

const App = () =>
  <Provider store={store}>
    <Router>
      <SpaWebSockApp dispatch={store.dispatch} getState={store.getState}>
        <Switch>
          <Route component={SpaPage} />
        </Switch>
      </SpaWebSockApp>
    </Router>
  </Provider>;
export default App;
