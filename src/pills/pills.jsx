import styles from './pills.module.css'
import Card from '../cards/cards'
export default function Pills(){
    return(
        <div className={styles.flex}>
        <div className={styles.pills}>
        <p className={styles.pillAll}>All</p> 
        <p className={styles.pillsChild}>Gaming</p> 
        <p className={styles.pillsChild}>Coding</p> 
        <p className={styles.pillsChild}>Interviews</p> 
        <p className={styles.pillsChild}>SDE</p>
        <p className={styles.pillsChild}>Movies</p>
        <p className={styles.pillsChild}>Sports</p>
        <p className={styles.pillsChild}>Mortal</p>
        <p className={styles.pillsChild}>Coding</p>
        </div>
        <Card />
        </div>
    )
}