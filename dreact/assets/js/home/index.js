import React, { Component } from 'react';
import Tables from '../tables/index.js';
import Graphs from '../graphs/index.js';

class Home extends Component {
    render(){
        return (
          <div>
            <Tables />
            <Graphs />
          </div>
        );
    }
}

export default Home