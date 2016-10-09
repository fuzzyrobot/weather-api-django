import React, { Component } from 'react';
import Chart from 'chart.js';
Chart.defaults.global.responsive = true;

class Graphs extends Component {
    constructor(props) {
        super(props);
        this.fetchWeather = this.fetchWeather.bind(this);
        this.state = {
            weatherDate: '',
        };
        this.fetchWeather();
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t.toDateString();
    }

    fetchWeather() {
        const processData = (data) => {
            this.weatherDate = [];
            this.weatherTempMin = [];
            this.weatherTempMax = [];
            this.weatherTempDay = [];
            this.weatherHumidity = [];
            for (let i=0; i < data.list.length; i++) {
                let dateTime = this.toDateTime(data.list[i].dt);
                this.weatherDate.push(dateTime);

                this.weatherTempMin.push(data.list[i].temp.min);
                this.weatherTempMax.push(data.list[i].temp.max);
                this.weatherTempDay.push(data.list[i].temp.day);
                this.weatherHumidity.push(data.list[i].humidity);
            }            
            this.setState({
              weatherDate: this.weatherDate,
              weatherTempMin: this.weatherTempMin,
              weatherTempMax: this.weatherTempMax,
              weatherTempDay: this.weatherTempDay,
              weatherHumidity: this.weatherHumidity,
              city: data.city.name
            });

            console.log(this.state.weatherDate, this.state.weatherTemp);
            return 'done';
        }

        return fetch(window.location.origin + '/weather').then(function(result) {
          return result.json();
        }).then((data) => {
          console.log(data);
          this.allData = data;
          this.city = data.city.name;
          processData(data);
          this.forceUpdate();
        });
    }

    render(){
        var BarChart = require("react-chartjs").Bar;

        var weatherTempData = {
          labels: this.state.weatherDate,
          datasets: [
          {
            label: 'min temperature',
            fillColor: 'rgba(54, 162, 235, 0.3)',
            data: this.state.weatherTempMin,
          },
          {
            label: 'avg day temperature',
            data: this.state.weatherTempDay,
            fillColor: 'rgba(255, 206, 86, 0.3)',
          },
          {
            label: 'max temperature',
            data: this.state.weatherTempMax,
            fillColor: 'rgba(255, 99, 132, 0.3)',
          }]
        };

        var weatherHumidityData = {
          labels: this.state.weatherDate,
          datasets: [
          {
            label: 'humidity',
            fillColor: 'rgba(100, 100, 100, 0.3)',
            data: this.state.weatherHumidity,
          }
          ]
        };

        var chartOptions = {};
        return (
          <div>
            <h1>Graphs!</h1>

            <button className='btn btn-default' onClick={this.fetchWeather}>
                Refresh weather data
            </button>

            <h3>{this.state.city}</h3>
            <h4>Temperature 7 day forecast (°F)</h4>
            <BarChart data={weatherTempData} options={chartOptions} redraw width="600" height="250" />

            <h4>Humidity 7 day forecast (%)</h4>
            <p>Distant predictions may be unavailable</p>
            <BarChart data={weatherHumidityData} options={chartOptions} redraw width="600" height="250" />
            
          </div>
        );
    }
}

export default Graphs