import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Income",
    },
    legend: {
      display: false,
    },
    scales: {
      xAxis: {
        grid: {
          display: false,
          color: "rgba(0, 0, 0, 0)",
        },
      },
      yAxis: {
        grid: {
          color: "rgba(0, 0, 0, 0)",
          display: false,
        },
      },
    },
  },
  interaction: {
    mode: "index",
    axis: "xy",
    intersect: false,
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "index",
    intersect: false,
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Income (in thousands)",
      data: [5, 17, 12, 9, 25, 7, 11, 8, 16, 3, 11, 15],
      borderColor: "rgba(137, 91, 241, 0.8)",
      backgroundColor: "rgba(137, 91, 241, 0.8)",
      fill: true,
    },
  ],
};

export function Graph() {
  return <Line options={options} data={data} />;
}
