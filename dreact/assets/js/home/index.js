import React, { Component } from 'react';
import Tables from '../tables/index.js';
import Graphs from '../graphs/index.js';

class Home extends Component {
    render(){
        return (
          <div>
            <Graphs />
            <Tables />
          </div>
        );
    }
}

export default Home