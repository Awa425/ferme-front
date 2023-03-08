import React from 'react'
import { Bar } from 'react-chartjs-2'

const ChartCow1 = () => {
  const data = {
    labels: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
    datasets: [
      {
        label: '# maladies',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <article className="chart">
      <h4 className="chartTitle">Evolution des maladies</h4>
      <Bar data={data} options={options} />
    </article>
  )
}

export default ChartCow1
