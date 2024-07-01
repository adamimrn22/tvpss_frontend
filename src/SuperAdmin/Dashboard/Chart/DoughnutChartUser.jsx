import { Doughnut } from "react-chartjs-2";

const pData = [48, 800, 400];
const yLabels = ["Admin State", "Admin  PPD", "Admin Sekolah"];

const data = {
  labels: yLabels,
  datasets: [
    {
      label: "Admin Types",
      data: pData,
      backgroundColor: ["#003f5c", "#bc5090", "#ffa600"],
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

const DoughnutChartUser = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartUser;
