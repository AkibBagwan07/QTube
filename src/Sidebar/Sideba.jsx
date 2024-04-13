import {ReactComponent as Toggle} from "../images/toggle.svg"
import {ReactComponent as Home} from "../images/home.svg"
import {ReactComponent as Shorts} from "../images/shorts.svg"
import {ReactComponent as Subscription} from "../images/subscription.svg"
import {ReactComponent as You} from "../images/you.svg"
import {ReactComponent as YouChannel} from "../images/youChannel.svg"
import {ReactComponent as History} from "../images/history.svg"
import {ReactComponent as Playlist} from "../images/playlist.svg"
import {ReactComponent as Videos} from "../images/videos.svg"
import {ReactComponent as WatchLater} from "../images/watchlater.svg"
import {ReactComponent as Like} from "../images/likeIcon.svg"
import {ReactComponent as YouArrow} from "../images/rightArrow.svg"

import Crio from "../images/crio.png"
import Procoder from "../images/procoder.png"

import Pills from "../pills/pills"
import  Card  from "../cards/cards"

import styles from "./sidebar.module.css"
import { useState } from "react"


export default function Sidebar() {
  const [handleClick,setHandleClick] = useState(true)

  const handleView = () => {
    setHandleClick(!handleClick)
  }
  return (
    <div>
      
 {handleClick ? 
     <div className={styles.parent}>
    <div className={styles.sidebar}>
    <div onClick={handleView} className={styles.innerFlex}><Toggle className={styles.sideButtons}/></div>
    <div className={styles.innerFlex}><Home className={styles.sideButtons}/> <p className={styles.name}>Home</p></div>
    <div className={styles.innerFlex}><Shorts className={styles.sideButtons}/> <p className={styles.name}>Shorts</p></div>
    <div className={styles.innerFlex}><Subscription className={styles.sideButtons}/> <p className={styles.name}>Subscription</p></div>
    <div className={styles.innerFlex}><You className={styles.sideButtons}/> <p className={styles.name}>You</p></div>
    </div><Pills /></div> : <div className={styles.parent}><div className={styles.sidebarClick}>
    <div onClick={handleView} className={styles.innerFlex}><Toggle className={styles.sideButtons}/></div>
    <div className={styles.innerFlexClick}><Home className={styles.sideButtons}/> <p className={styles.nameClick}>Home</p></div>
    <div className={styles.innerFlexClick}><Shorts className={styles.sideButtons}/> <p className={styles.nameClick}>Shorts</p></div>
    <div className={styles.innerFlexClick}><Subscription className={styles.sideButtons}/> <p className={styles.nameClick}>Subscription</p></div>
    <hr />
    <div className={styles.innerFlexClick}> <p className={styles.nameClick}>You</p><YouArrow className={styles.sideButtons}/></div>
    <div className={styles.innerFlexClick}><YouChannel className={styles.sideButtons}/> <p className={styles.nameClick}>Your Channel</p></div>
    <div className={styles.innerFlexClick}><History className={styles.sideButtons}/> <p className={styles.nameClick}>History</p></div>
    <div className={styles.innerFlexClick}><Playlist className={styles.sideButtons}/> <p className={styles.nameClick}>Playlist</p></div>
    <div className={styles.innerFlexClick}><Videos className={styles.sideButtons}/> <p className={styles.nameClick}>Videos</p></div>
    <div className={styles.innerFlexClick}><WatchLater className={styles.sideButtons}/> <p className={styles.nameClick}>Watch Later</p></div>
    <div className={styles.innerFlexClick}><Like className={styles.sideButtons}/> <p className={styles.nameClick}>Liked Videos</p></div>
    <hr />
    <div className={styles.innerFlexClick}> <p className={styles.nameClick}>Subscriptions</p></div>
    <div className={styles.innerFlexClick}><img className={styles.pngShape} src={Crio} alt={Crio} /><p className={styles.nameClick}>Crio.do</p></div>
    <div className={styles.innerFlexClick}><img className={styles.pngShape} src={Procoder} alt={Crio} /><p className={styles.nameClick}>Procoder Anurag...</p></div>
    </div>
    <Pills />
    </div>}
    </div>
  )
}