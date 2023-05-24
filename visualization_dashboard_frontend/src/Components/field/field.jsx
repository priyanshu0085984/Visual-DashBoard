import React from "react";
import styles from "./field.module.css";
export default function Field({ name, filter, setfilter }) {
  return (
    <div className={styles.inpt}>
      <label htmlFor="">{name}</label>
      <input
        type="text"
        onChange={(e) => {
          setfilter({...filter,[name]:e.target.value});
        }}
      />
    </div>
  );
}
