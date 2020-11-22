import global from '../styles/global.module.css';
import styles from '../styles/components/projectCard.module.css';

import 'devicon';
export default function ProjectCard({project}) {

   const bullets = [];
   const langIcons = [];
   for (const [i,v] of project.description.entries()){
      bullets.push(<li key={i}>{v}</li>);
   }

   for (const [i,v] of project.tools.entries()){
      langIcons.push(<i key={i} className={`devicon-${v}-plain colored`}></i>);
   }


   return (
      <div className={`${styles.cont} ${global.card10}`}>
         <div className={styles.header}>
            <h4 className={global.accentText}>{project.name}</h4>
            <div className={styles.iconsCont}>
               {langIcons}
            </div>
         </div>
         
         <ul className={styles.bullets}>
            {bullets}
         </ul>
      </div>
   )
}