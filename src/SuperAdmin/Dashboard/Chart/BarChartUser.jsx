import { Bar } from "react-chartjs-2";

const pData = [48, 800, 400];
const yLabels = ["Admin\nState", "Admin\nPPD", "Admin\nSekolah"];

const data = {
  labels: yLabels,
  datasets: [
    {
      label: "Admin Types",
      data: pData,
      backgroundColor: ["#25565b", "#228fa6", "#2ecaff"],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y", // Display bars vertically
  plugins: {
    legend: {
      display: false, // Hide legend for this chart
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
