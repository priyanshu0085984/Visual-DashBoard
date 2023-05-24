import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from "../Visuals.module.css"

Chart.register(CategoryScale);

const transformData = (data) => {
  const labels = data.map((item) => item.sector);
  const values = data.map((item) => item.intensity);

  return {
    labels: labels,
    datasets: [
      {
        label: "Sector",
        data: values,
        backgroundColor: "steelblue",
        borderColor: "black",
        borderWidth: 2,
        hoverBackgroundColor: "lightblue", 
        hoverBorderColor: "red",
      },
    ],
  };
};

const BarGraph = ({ jsonData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const transformedData = transformData(jsonData);
    setChartData(transformedData);
  }, [jsonData]);

  return (
    <div className={styles.container}>
      <h3>Bar Graph of sector and intensity</h3>
      {chartData && <Bar data={chartData} />}
    </div>
  );
};

export default BarGraph;
