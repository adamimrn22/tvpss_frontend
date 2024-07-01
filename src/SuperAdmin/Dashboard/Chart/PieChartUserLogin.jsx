import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Admin State", "Admin PPD", "Admin Sekolah"],
  datasets: [
    {
      label: "Admin Types",
      data: [12, 33, 50],
      backgroundColor: ["#25565b", "#2ea7a6", "#48ffea"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom", // Position the legend at the bottom
      align: "center", // Ensure legend items are in a row
      display: true,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        usePointStyle: true,
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[0].data[tooltipItem.index];
          return `${label}: ${value}`;
        },
      },
    },
  },
};

const PieChartUserLogin = () => {
  return <Pie data={data} options={options} />;
};

export default PieChartUserLogin;
