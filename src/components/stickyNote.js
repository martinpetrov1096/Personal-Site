import styles from '../styles/components/stickyNote.module.css';
import global from '../styles/global.module.css';

export default function StickyNote({tilt, text, subText}) {

   return(
      <div style={{transform: `rotate(${tilt}deg)`}} className={`${global.card10} ${styles.notecard}`}>
            <h2>{text}</h2>
            <h6 style={{margin: '10px'}}>{subText}</h6>

         </div>
   )

}