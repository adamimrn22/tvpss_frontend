import { Bar } from "react-chartjs-2";

const pData = [10, 15, 8, 12, 18, 14]; // Data palsu untuk Januari hingga Jun
const months = ["Januari", "Februari", "Mac", "April", "Mei", "Jun"];

const data = {
  labels: months,
  datasets: [
    {
      label: "Jumlah Pelajar Krew",
      data: pData,
      backgroundColor: [
        "#25565b",
        "#228fa6",
        "#2ecaff",
        "#6bc3d6",
        "#a2d9e2",
        "#d4edf4",
      ], // Warna contoh, sesuaikan jika perlu
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "x", // Papar palang secara melintang
  plugins: {
    legend: {
      display: false, // Sembunyikan legenda bagi carta ini
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
    y: {
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
