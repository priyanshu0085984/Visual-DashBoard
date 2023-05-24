import { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import styles from "../Visuals.module.css"
const transformData = (data) => {
  const labels = data.map((item) => item.region);
  const intensities = data.map((item) => item.intensity);
  const relevances = data.map((item) => item.relevance);
  const likelihoods = data.map((item) => item.likelihood);

  const dataset = data.map((item, index) => ({
    x: relevances[index],
    y: likelihoods[index],
    r: intensities[index],
    label: labels[index],
    backgroundColor: "rgba(75, 192, 192, 0.6)", // Bubble color
    borderColor: "white", // Bubble border color
    borderWidth: 1, // Bubble border width
  }));

  return {
    datasets: dataset,
  };
};

const BubbleChart = ({ jsonData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const transformedData = transformData(jsonData);
    setChartData(transformedData);
  }, [jsonData]);

  return (
    <div className={styles.container}>
      <h3>Bubble Chart</h3>
      {chartData && <Bubble data={chartData} />}
    </div>
  );
};

export default BubbleChart;
