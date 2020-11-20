import global from '../styles/global.module.css';
import styles from '../styles/components/navText.module.css';

export default function NavText({section}) {
   return (
      <h2 className={`${global.blueText} ${global.indent5} ${styles.textContainer}`}>{section}</h2>         
   )
}
