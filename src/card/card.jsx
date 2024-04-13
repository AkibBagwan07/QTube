import * as React from 'react';
import styles from "./card.module.css"

export default function CardMaker({imageSrc,author,duration,title,published,views,subscribers,description,isLive,id}) {
 
  let viewsStr = views.replace(/,/g,'')
  let viewsToK = viewsStr%1000
  let subsStr = ""
   for (let i=0 ; i<subscribers.length;i++){
      if (subscribers[i]==" " && i>0){
        break;
      }
      else{
        subsStr += subscribers[i]
      }
   }

   let subsTok = subsStr%1000
  return (
    <div key={id} className={styles.card}>
      <div><img className={styles.image} src={imageSrc} alt={imageSrc} />
      <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.flex}>
      <div className={styles.channelProfile}>AB</div>
      <div className={styles.alignTitleUthor}><p className={styles.title}>{title}</p><p className={styles.author}>{author}</p></div>
      </div>
      <div className={styles.flexViewsSubs}>
        <p className={styles.views}>{viewsToK}K Views</p>
        <p className={styles.views}>{subsTok}K subscribers</p>
        </div>    
    </div>
  );
}
