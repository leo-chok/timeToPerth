
import  React, { useState , useEffect } from 'react'

import styles from "../styles/DateTime.module.css";


export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={styles.container}>
        <div className={styles.card}>
        <h2>Lille</h2>
            <p> Time : {date.toLocaleTimeString("fr-fr",{timeZone: "Europe/Paris"})}</p>
            <p> Date : {date.toLocaleDateString("fr-fr",{timeZone: "Europe/Paris"})}</p>
        </div>
        <div className={styles.card}>
        <h2>Perth</h2>
            <p> Time : {date.toLocaleTimeString("fr-fr",{timeZone: "Australia/Perth"})}</p>
            <p> Date : {date.toLocaleDateString("fr-fr",{timeZone: "Australia/Perth"})}</p>
        </div>
        </div>
    )
}

export default DateTime