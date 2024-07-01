import { Bar } from "react-chartjs-2";

const pData = [2, 10, 8];
const yLabels = ["Versi 1", "Versi 2", "Versi 3"];

const data = {
  labels: yLabels,
  datasets: [
    {
      label: "Bilangan Sekolah",
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
