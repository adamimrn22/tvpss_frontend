import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Versi 1", "Versi 2", "Versi 3"],
  datasets: [
    {
      label: "Peratus Versi",
      data: [2, 8, 10],
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
          const { dataIndex, dataset } = tooltipItem;
          const label = data.labels[dataIndex];
          const value = dataset.data[dataIndex];
          const total = dataset.data.reduce((sum, val) => sum + val, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
};

const PieChartUserLogin = () => {
  return <Pie data={data} options={options} />;
};

export default PieChartUserLogin;
