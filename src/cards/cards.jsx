import { useEffect , useState} from "react"
import axios from "axios"
import styles from "./cards.module.css"
import { Grid } from "@mui/material";
import CardMaker from "../card/card"

export default function Card(){
 let Api = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"   
 const [data,setData] = useState([])
 useEffect(()=>{
   (async function(){
    try {
      let info =await axios.get(Api)
      setData(info.data)
      console.log(info.data)
   } catch (error) {
     console.log(error)
   }
  })
   ()
 },[Api])
 return(
  <Grid className={styles.wrapper} container spacing={2}>
  {data.map((video) => {
    return (
      <Grid className={styles.item} item xs={12} sm={6} md={6} lg={4}>
        <CardMaker
          imageSrc={video.thumbnailUrl}
          author={video.author}
          duration={video.duration}
          title={video.title}
          published={video.releaseDate}
          views={video.views}
          subscribers={video.subscriber}
          description={video.description}
          isLive={video.isLive}
          id={video.id}
        />
      </Grid>
    );
  })}
</Grid>
    )
}