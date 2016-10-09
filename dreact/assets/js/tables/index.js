import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

class Tables extends Component {
    constructor(props) {
        super(props);
        // This line is important!
        this.handleClick = this.handleClick.bind(this);
        this.processData = this.processData.bind(this);
        this.state = {
            dataList: this.handleClick(),
        };
    }

    handleClick() {
        return fetch(window.location.origin + '/weather').then(function(result) {
          return result.json();
        }).then((data) => {
          console.log(data);
          this.allData = data;
          this.city = data.city.name;
          this.weather = this.processData(data);
          console.log(this.weather);
          this.forceUpdate();
          return this.weather;
        });
    }
    processData(data) {
        let weatherDate = [];
        let weatherTemp = [];
        for (let i=0; i<data.list.length; i++) {
            weatherDate.push(data.list[i].dt_txt);
            weatherTemp.push(data.list[i].temp);
        }

        return weatherTemp;
    }

    render(){
        return (
            <div>
                <h1>Tables</h1>
                <button className="btn btn-default" onClick={this.handleClick}>
                    Refresh Data
                </button>
                <div>
                    {JSON.stringify(this.allData)}
                </div>
                <Table
                    rowHeight={50}
                    headerHeight={50}
                    rowsCount={50}
                    width={1000}
                    height={500} >
                </Table>
            </div>
        );
    }
}

export default Tables