import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './line.css';

const LineChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const ctx = chartRef.current.getContext('2d');

    const labels = data.map(item => item.fecha);
    const biomasaData = data.map(item => item.biomasa);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Biomasa',
          data: biomasaData,
          borderColor: '#4175F2',
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          display: false, // Oculta la etiqueta del eje x
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: options,
    });
  }, [data]);

  return (
    <div className="container">
      <div className="containerTopGraphic">
        <p className="titleGraphic">Obtención de biomasa</p>
      </div>
      <div className="containerGraphicLine">
        <canvas ref={chartRef} className="grafico" />
      </div>
    </div>
  );
};

export default LineChartComponent;
