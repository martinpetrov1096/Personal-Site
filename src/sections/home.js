import styles from '../styles/sections/home.module.css';
import global from '../styles/global.module.css';
export default function Home() {
   return (
      <section className={`${styles.cont}`}>
         <h1 className={styles.name}>Mart<span className={`${global.accentText} ${styles.span}`}>i</span>n Petrov</h1>
      </section>
   )
}