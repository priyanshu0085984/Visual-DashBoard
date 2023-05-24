import styles from '../Visuals.module.css';
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const transformData = (data) => {
  const regions = data.map((item) => item.region);
  const intensities = data.map((item) => item.intensity);

  return {
    labels: regions,
    datasets: [
      {
        data: intensities,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ], // Array of colors for each slice
        borderColor: "white", // Border color for each slice
        borderWidth: 1, // Border width for each slice
      },
    ],
  };
};

const PieChart = ({ jsonData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const transformedData = transformData(jsonData);
    setChartData(transformedData);
  }, [jsonData]);

  return (
    <div className={styles.container}>
      <h3>Pie Chart of region and intensity</h3>
      {chartData && <Pie data={chartData} />}
    </div>
  );
};

export default PieChart;
