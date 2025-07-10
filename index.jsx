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
    console.log(source["gyouseki"].master)

    let current = "gyouseki";

    // let test = source[current].map(item => ({
    //       // name: item.indexes.name,
    //       data: item      
    // }));
    // console.log(test);
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          type: 'column' 
        },
        xAxis: {
          categories: mcategories,
          labels: {
            rotation: 0,
            align: "center",
            style: {
              fontSize: "12px",
              fontFamily:
                '"Droid Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo',
            },
          },
          tickLength: 0,
          lineColor: "#aaaaaa",
          lineWidth: 1,
      },
        yAxis: [
        {
          plotLines: [
            {
              color: "#aaaaaa",
              width: 2,
              value: 0,
            },
          ],
          gridLineDashStyle: "ShortDash",
          min: "min" in source[current] ? source[current].min : null,
          max: "max" in source[current] ? source[current].max : null,
          tickInterval: "span" in source[current] ? source[current].span : null,
          title: {
            y: -20,
            align: "right",
            x: 30,
            align: "high",
            rotation: 0,
            text: source[current].unit,
          },
          labels: {
            formatter: function () {
              if (this.value >= 0)
                return Highcharts.numberFormat(
                  this.value,
                  source[current].decimal
                );
              else
                return Highcharts.numberFormat(
                  this.value,
                  source[current].decimal
                ).replace("-", "-");
            },
            style: {
              fontSize: "12px",
              fontFamily:
                '"Droid Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo',
            },
          },
        },
        {
          gridLineDashStyle: "ShortDash",
          min: "min2" in source[current] ? source[current].min2 : null,
          max: "max2" in source[current] ? source[current].max2 : null,
          tickInterval:
            "span2" in source[current] ? source[current].span2 : null,
          title: {
            y: -20,
            x: 20,
            rotation: 0,
            align: "high",
            text: source[current].unit2,
            margin: 20, //push out 50 pixels
          },
          labels: {
            align: "right",
            formatter: function () {
              if (this.value >= 0)
                return Highcharts.numberFormat(
                  this.value,
                  source[current].decimal2
                );
              else
                return Highcharts.numberFormat(
                  this.value,
                  source[current].decimal2
                ).replace("-", "-");
            },
            style: {
              fontSize: "12px",
              fontFamily:
                '"Droid Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo',
            },
            x: 40,
          },
          opposite: true,
        },
      ],
        series: source[current].master.map(item => ({
          // name: item.indexes.name,
          data: item.master
        })),
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

    for (let i = 0; i < source[current].length; i++) {
      this.state.series.update({name: source[current].indexes[i].name, data: source[current].master[i] });
    }

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