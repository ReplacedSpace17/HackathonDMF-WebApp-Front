import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Datos de ejemplo',
          data: [30, 40, 25, 55, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default PieChartComponent;
