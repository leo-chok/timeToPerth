import styles from '../styles/Home.module.css';
import React, { useState } from "react"
import DateTime from './DateTime';


function Home() {
  return (
    <div className={styles.container}>
      <DateTime></DateTime>
    </div>
  );
}

export default Home;
