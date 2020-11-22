import ProjectCard from '../components/projectCard';
import global from '../styles/global.module.css';
import styles from '../styles/timeline.module.css';
import StickyNote from '../components/stickyNote';

export default function Timeline({projects}) {
   console.log(projects)
   const pCards = [];

   for (const [i,v] of projects.entries()) {
      pCards.push(<ProjectCard key={i} project={v}></ProjectCard>)
   }



   return (
      <section>
         <StickyNote 
            tilt="-15"
            text="Some Recent Projects"
            subText=""
         ></StickyNote>
         <div className={`${styles.cont} ${global.offwhite}`}>
         
            <div className={styles.date}>
               <h4>September</h4>
            </div>
            <div className={`${styles.line} ${global.accent} ${global.indentAccent5}`}></div>
            <div className={styles.projects}>
               {pCards}

            </div>
         </div>
      </section>
   )
}