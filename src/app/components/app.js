import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom'
import {Provider} from 'react-redux';

import appRoutes from 'app/appRoutes';
import AppStore from 'app/redux/appStore';


class AppOrigin extends Component {
  render() {
    return (
        <Router>
            <Switch>
                {appRoutes.map((route, i) => (
                    <Route key={i}  {...route} />
                ))}
              <Route render={({ location }) => (
                  <div className='l-one-col'>
                      <h3>
                          Page not exist! <Link exact to='/'>Go home</Link>
                      </h3>
                  </div>
              )} />
          </Switch>
      </Router>
    );
  }
}

const App = (props) => (
    <Provider store={AppStore}>
        <AppOrigin {...props} />
    </Provider>
);

export default App;
