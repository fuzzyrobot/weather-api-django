import React from 'react';
import {Router, Route, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
import { render } from 'react-dom';
import Main from './main/index.js';
import Home from './home/index.js';
import Table from './table/index.js';
import Graph from './graph/index.js';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
class App extends React.Component {    
    render(){
        return (
          <Router history={appHistory}>
            <Route component={Main}>
              <Route path="/" component={Home}/>
              <Route path="/graph" component={Graph}/>
              <Route path="/table" component={Table}/>
            </Route>
          </Router>
        );
    }
}

export default App;