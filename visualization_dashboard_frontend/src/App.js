import { useState } from "react";
import styles from "./App.module.css";
import Form from "./Components/Form/Form";
import BarGraph from "./Components/Visuals/BarGraph/BarGraph";
import LineChart from "./Components/Visuals/LineChart/LineChart";
import PieChart from "./Components/Visuals/PieChart/PieChart";
import BubbleChart from "./Components/Visuals/BubbleChart/BubbleChart"
function App() {
  const [data, setData] = useState([
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "gas",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:25",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
      "likelihood": 3
  },
  {
    "end_year": "",
    "intensity": 6,
    "sector": "Energy",
    "topic": "oil",
    "insight": "Annual Energy Outlook",
    "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    "region": "Northern America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:51:24",
    "published": "January, 09 2017 00:00:00",
    "country": "United States of America",
    "relevance": 2,
    "pestle": "Industries",
    "source": "EIA",
    "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
    "likelihood": 3
},
  ]);
  const message = "No such data found";
  return (
    <>
      <div className={styles.form}>
        <Form data={data} setData={setData} />
      </div>
      {data.length === 0?<h2 className={styles.warning}>{message}</h2>:null}
      <div className={styles.visuals}>
        <BarGraph jsonData={data} />
        <LineChart jsonData={data}/>
        <PieChart jsonData={data}/>
        <BubbleChart jsonData={data}/>
      </div>
    </>
  );
}

export default App;
