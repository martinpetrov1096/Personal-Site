


import Name from '../components/name';


import styles from '../styles/home.module.css';

export default function Home({ id }) {

   

   return (
      <section id={id} className={styles.main}>
         <Name></Name>

      </section>

   )
}