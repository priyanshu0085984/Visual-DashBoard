import React, { useState } from "react";
import styles from "./Form.module.css";
import Field from "../field/field";
import axios from "../../BaseAxios";
export default function Form({data,setData}) {
  const [filter,setfilter] = useState({})
  const filters = ["End_Year","Intensity","Sector","Topic","Insight","Region","Start_Year","Impact","Country","Relevance","Pestle","Source","Title","Likelihood"];
  const apply = () =>{
    axios.post('/',{...filter})
    .then((result)=>{
      setData(result.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <fieldset>
        <legend className={styles.legend}>Filters</legend>

        {filters.map((e, i) => {
          return <Field name={e} filter={filter} setfilter={setfilter} key={e} />;
        })}

        <button onClick={apply}>Apply filters</button>
      </fieldset>
    </>
  );
}
