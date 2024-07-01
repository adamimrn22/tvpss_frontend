import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Johor Bahru",
    "Skudai",
    "Batu Pahat",
    "Kluang",
    "Mersing",
    "Segamat",
    "Kulaijaya",
    "Pontian",
    "Muar",
    "Kota Tinggi",
    "Ledang",
    "Tangkak",
    "Kulai",
    "Pontian",
    "Mersing",
    "Segamat",
  ],
  datasets: [
    {
      label: "Districts",
      data: [12, 15, 10, 7, 8, 5, 6, 4, 9, 3, 2, 4, 5, 6, 7], // Example data for the districts
      backgroundColor: [
        "#25565b",
        "#2ea7a6",
        "#2ea736",
        "#48ffea",
        "#e14d2a",
        "#e8a91f",
        "#f5a623",
        "#1b75bc",
        "#007bff",
        "#6c757d",
        "#ff5733",
        "#c70039",
        "#900c3f",
        "#581845",
        "#d32f2f",
        "#ffeb3b",
      ],
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
  cutout: "70%", // This determines the thickness of the doughnut
};

const DoughnutChartUserLogin = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartUserLogin;
