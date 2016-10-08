import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

class Tables extends Component {
    constructor(props) {
        super(props);
        // This line is important!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch(window.location.origin + '/weather').then(function(result) {
          return result.json();
        }).then((data) => {
          console.log(data);
          this.rows = data;
        });
    }

    render(){
        return (
            <div>
                <h1>Table page</h1>
                <button onClick={this.handleClick}>
                    Say hi
                </button>
            </div>
        );
    }
}

export default Tables