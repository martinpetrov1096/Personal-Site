

import styles from '../styles/home.module.css';
import global from '../styles/global.module.css';
export default function Home() {
   return (
      <section className={`${styles.cont} ${global.offwhite}`}>
         <h1 className={styles.name}>Mart<span className={`${global.accentText} ${styles.span}`}>i</span>n Petrov</h1>


      </section>
   )
}