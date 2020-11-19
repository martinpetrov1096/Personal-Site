


import Name from '../components/name';
import Resume from '../components/resume';

import styles from '../styles/home.module.css';

export default function Home(props) {

  

   return (
      <main className={styles.main}>
         <Name></Name>
         <Resume className="resume" start={0} end={2}></Resume>
      </main>

   )
}