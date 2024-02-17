import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './donout.css'


const DonutChartComponent = ({ Title, aguaDulceValue, aguaSaladaValue }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Agua Dulce', 'Agua Salada'],
      datasets: [
        {
          label: 'Tipo de Microalga',
          data: [aguaDulceValue, aguaSaladaValue],
          backgroundColor: [
            '#4175F2', // Color para agua dulce
            '#809EFE', // Color para agua salada
          ],
          borderColor: [
            '#4175F2',
            '#809EFE',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, [aguaDulceValue, aguaSaladaValue, Title]);

  return (
    <div className="container">
      <div className="containerTopGraphic">
        <p className='titleGraphic'>{Title}</p>
      </div>
      <div className="containerGraphicDonut">
        <canvas ref={chartRef} className="grafico" />
      </div>
    </div>
  );
};

export default DonutChartComponent;
