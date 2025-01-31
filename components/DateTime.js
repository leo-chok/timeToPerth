
import  React, { useState , useEffect } from 'react'

import styles from "../styles/DateTime.module.css";


function DateTime ({city,timeZone}){


    var [date,setDate] = useState(new Date());
    
    //Actualise toutes les secondes
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div className={styles.container}>
            <div className={styles.card}>
            <h2>{city}</h2>
                <p> Time : {date.toLocaleTimeString("fr-fr",{timeZone: `${timeZone}`})}</p>
                <p> Date : {date.toLocaleDateString("fr-fr",{timeZone: `${timeZone}`})}</p>
            </div>
        </div>
    )
}

export default DateTime