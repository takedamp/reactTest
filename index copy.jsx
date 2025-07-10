// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';
// import reportWebVitals from './reportWebVitals.ts';


// const container = document.getElementById('root')
// const root = createRoot(container);
// root.render(<App />);

import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import {mcategories, source} from './data';


class LineChart extends Component {
  constructor(props) {
    super(props);
    console.log(mcategories);
    console.log(source);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          type: 'column' 
        },
        xAxis: {
          categories: mcategories,
        },
        series: [
          { data: source["gyouseki"].master[0] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = (e) => { 
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  // updateSeries = () => {
  //   // The chart is updated only with new options.
  //   this.setState({ 
  //     chartOptions: {
  //       series: [
  //         { data: [Math.random() * 5, 2, 1]}
  //       ]
  //     }
  //   });
  // }

  render() {
    const { chartOptions, hoverData } = this.state;
    
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      {/* <h3>Hovering over {hoverData}</h3> */}
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<LineChart />);