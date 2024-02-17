import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './donout.css'
// Asegúrate de tener un archivo CSS para estilizar el gráfico de dona si es necesario.

const DonutChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Rojo', 'Verde', 'Azul'],
      datasets: [
        {
          label: 'Datos de ejemplo',
          data: [30, 40, 25],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, // Esto evita que el gráfico mantenga una relación de aspecto fija.
      cutout: '70%', // Controla el tamaño del agujero en el centro de la dona.
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    new Chart(ctx, {
      type: 'doughnut', // Tipo de gráfico: dona
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="container">
      <div className="containerTopGraphic">
        <p className='titleGraphic'>Obtencion de biomasa</p>

      </div>
      <div className="containerGraphicDonut">
        <canvas ref={chartRef} className="grafico" />
      </div>
    </div>
  );
};

export default DonutChartComponent;
