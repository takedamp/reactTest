import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals.ts';


const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);

// import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
// import HighchartsReact from 'highcharts-react-official';
// import Highcharts from 'highcharts';

// class LineChart extends Component {
//   constructor(props) { // constructorについてはirpocketでは扱っていない内容なため、ここは注意する。
//     super(props); //superに代替するものを探したほうが良い可能性がある。

//     this.state = {
//       // To avoid unnecessary update keep all options in the state.
//       chartOptions: {
//         xAxis: {
//           categories: ['A', 'B', 'C'],
//         },
//         series: [
//           { data: [1, 2, 3] }
//         ],
//         plotOptions: {
//           series: {
//             point: {
//               events: {
//                 mouseOver: this.setHoverData.bind(this)
//               }
//             }
//           }
//         }
//       },
//       hoverData: null
//     };
//   }

//   setHoverData = (e) => { 
//     // The chart is not updated because `chartOptions` has not changed.
//     this.setState({ hoverData: e.target.category })
//   }

//   updateSeries = () => {
//     // The chart is updated only with new options.
//     this.setState({ 
//       chartOptions: {
//         series: [
//           { data: [Math.random() * 5, 2, 1]}
//         ]
//       }
//     });
//   }

//   render() {
//     const { chartOptions, hoverData } = this.state;
    
//     return (
//       <div>
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={chartOptions}
//         />
//       <h3>Hovering over {hoverData}</h3>
//       <button onClick={this.updateSeries.bind(this)}>Update Series</button>
//       </div>
//     )
//   }
// }

// const container = document.getElementById('root')
// const root = createRoot(container);
// root.render(<LineChart />);