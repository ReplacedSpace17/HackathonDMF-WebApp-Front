import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Datos de ejemplo',
          data: [30, 40, 25, 55, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
          // Ajusta esta propiedad para líneas redondeadas
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'category',
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default LineChartComponent;
