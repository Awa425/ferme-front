import React from 'react'
import { Pie } from 'react-chartjs-2';

const ChartCow2 = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5,],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <article className="chart">
        <h3 className="chartTitle">Monty Milk Production</h3>
        <Pie data={data} />
        </article>
    )
}

export default ChartCow2
