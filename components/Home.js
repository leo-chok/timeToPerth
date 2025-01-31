import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import DateTime from "./DateTime";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";




var cityTimezones = require("city-timezones");

const cities = [];

function addCity(cityName) {
  let city = cityName;
  const cityLookup = cityTimezones.lookupViaCity(city);
  if (cityLookup){
  const timeZone = cityLookup[0].timezone;
  cities.push(<DateTime city={city} timeZone={timeZone}></DateTime>);
  }
}

addCity("Lille");
addCity("Perth");
addCity("Noumea");
addCity("Los Angeles");

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.search}>
      Search Bar feature
      </div>
      <div className={styles.container}>{cities}</div>
    </div>
  );
}

export default Home;
