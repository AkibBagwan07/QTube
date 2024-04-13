import {ReactComponent as Search} from "../images/search.svg"
import {ReactComponent as Voice} from "../images/voiceNote.svg"
import {ReactComponent as Upload} from "../images/upload.svg"
import {ReactComponent as Notification} from "../images/notification.svg"
import {ReactComponent as YouTube} from "../images/youtube.svg"
import {ReactComponent as Toggle} from "../images/toggle.svg"
import { useState } from "react"
import AB from "../images/ab.png"
import styles from "./navbar.module.css"
export default function Navbar() {
  
  return(
    <div className={styles.FlexPar}>
      <div className={styles.flex}><YouTube className={styles.ytLogo}/><p className={styles.nameClick}>QTube</p></div>
      <div className={styles.flex}><input className={styles.input} type="text" placeholder="Search"/><button className={styles.search}><Search className={styles.icon}/> </button></div>
      <div className={styles.flex}><button className={styles.voiceBag}><Voice className={styles.voice}/></button></div>
      <div className={styles.flex}>
      <div className={styles.flexUploadNoti}><Upload className={styles.upload} /><Notification className={styles.notification}/>
      <img className={styles.profile} src={AB} alt={AB} />
      </div>
      </div>
    </div>
  )
}

{/* <div className={styles.mainPar}>
      <div><YouTube />
    <div className={styles.flexpar}>
      <div className={styles.flexSearchVoice}><input className={styles.input} type="text" placeholder="Search"/><button className={styles.search}><Search className={styles.icon}/> </button>
     <button className={styles.voiceBag}><Voice className={styles.voice}/></button></div>
     <div className={styles.flexUploadNoti}><Upload className={styles.upload} /><Notification className={styles.notification}/>
     <img className={styles.profile} src={AB} alt={AB} />
     </div>
     </div>
     </div>
     </div> */}

