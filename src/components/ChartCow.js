import React from 'react'
import { Line } from 'react-chartjs-2'

const ChartCow = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: ' race 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: ' race 2',
        data: [0, 19, 3, 5, 2, 0],
        pointBackgroundColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        pointBorderColor: 'rgb(255, 99, 132)',
      },

    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Lie Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 7, stepSize: 1
          },
        },
      ],
    },
  };


  return (
    <div className="chart">
      <h4 className="chartTitle">Production du lait</h4>
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartCow
