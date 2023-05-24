import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "../Visuals.module.css";
const transformData = (data) => {
  const labels = data.map((item) => item.start_year);
  const intensities = data.map((item) => item.intensity);

  return {
    labels: labels,
    datasets: [
      {
        label: "Start Year",
        data: intensities,
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        borderWidth: 2, // Line width
        hoverBackgroundColor: "lightblue", 
        hoverBorderColor: "darkred",
      },
    ],
  };
};

const LineChart = ({ jsonData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const transformedData = transformData(jsonData);
    setChartData(transformedData);
  }, [jsonData]);

  return (
    <div className={styles.container}>
      <h3>Line Chart of start year and intensity</h3>
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default LineChart;
