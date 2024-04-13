import React from 'react'
import Sidebar from '../Sidebar/Sideba'
import Navbar from '../navbar/navbar'
import styles from "./homepage.module.css"

export default function Homepage(){
    return(
        <div className={styles.main}>
          <div className={styles.navSec}>
          <Navbar/>
          </div>
          <div></div>
          <Sidebar />
          </div>
    )
}