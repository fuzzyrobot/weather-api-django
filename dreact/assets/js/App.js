import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { render } from 'react-dom';
import Main from './main/index.js';
import Home from './home/index.js';
import Tables from './tables/index.js';
import Graphs from './graphs/index.js';

class App extends React.Component {    
    render(){
        return (
          <Router history={browserHistory}>
            <Route component={Main}>
              <Route path="/" component={Home} />
              <Route path="/graphs" component={Graphs}/>
              <Route path="/tables" component={Tables}/>
            </Route>
          </Router>
        );
    }
}

export default App;
