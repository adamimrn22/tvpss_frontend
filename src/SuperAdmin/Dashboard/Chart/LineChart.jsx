import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const days = [
  new Date(2024, 5, 1, 0, 0, 0), // June 1, 2024, 00:00:00
  new Date(2024, 5, 2, 0, 0, 0), // June 2, 2024, 00:00:00
  new Date(2024, 5, 3, 0, 0, 0), // June 3, 2024, 00:00:00
  new Date(2024, 5, 4, 0, 0, 0), // June 4, 2024, 00:00:00
  new Date(2024, 5, 5, 0, 0, 0), // June 5, 2024, 00:00:00
  new Date(2024, 5, 6, 0, 0, 0), // June 6, 2024, 00:00:00
  new Date(2024, 5, 7, 0, 0, 0) // June 7, 2024, 00:00:00
];

const monthsInMalay = [
  'Januari',
  'Februari',
  'Mac',
  'April',
  'Mei',
  'Jun',
  'Julai',
  'Ogos',
  'September',
  'Oktober',
  'November',
  'Disember'
];

const labels = days.map((day) => {
  const dayOfMonth = day.getDate();
  const monthIndex = day.getMonth();
  const monthInMalay = monthsInMalay[monthIndex];
  return `${dayOfMonth} ${monthInMalay}`;
});
const data = {
  labels: labels,
  datasets: [
    {
      id: 1,
      label: 'Admin State Login',
      data: [150, 200, 100, 100, 600, 31, 50],
      borderColor: '#37285c'
    },
    {
      id: 2,
      label: 'Admin School Login',
      data: [1500, 200, 3100, 300, 300, 331, 400],
      borderColor: '#0096bf'
    },
    {
      id: 3,
      label: 'Admin PPD Login',
      data: [100, 200, 300, 0, 800, 100, 150],
      borderColor: '#94ffcc'
    }
  ]
};

const LineChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer.current) {
      const chartInstance = new Chart(chartContainer.current, {
        type: 'line',
        data: data,
        options: {
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 0,
              bottom: 0
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  return <canvas ref={chartContainer} />;
};

export default LineChart;
