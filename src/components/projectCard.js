import global from '../styles/global.module.css';
import styles from '../styles/components/projectCard.module.css';

import 'devicon';
export default function ProjectCard({project}) {
   console.log(project)
   const bullets = [];
   const details = [];
   for (const [i,v] of project.accomplishments.entries()){
      bullets.push(<li key={i}>{v}</li>);
   }

   for (const [i,v] of project.tools.entries()){
      details.push(
         <div className={styles.detail}>
            <i key={i} className={`devicon-${v}-plain colored`}></i>
            <h6>{v}</h6>
         </div>
      );
   }
   details.push(
      <div className={styles.detail}>
         <h4>{project.linesOfCode}</h4>
         <h6>Lines of Code</h6>
      </div>
   );
   details.push(
      <div className={styles.detail}>
         <h4>{project.numCommits}</h4>
         <h6>My Commits</h6>
      </div>
   );
   details.push(
      <div className={styles.detail}>
         <i className={`devicon-github-plain colored`}></i>
         <h6>Github URL</h6>
      </div>
   );

   return (
      <div className={`${styles.cont} ${global.card10}`}>
         <div className={styles.header}>
            <h4 className={global.accentText}>{project.name}</h4>
         </div>
         <p>{project.description}</p>
         <h6>My Accomplishments</h6>
         <ul className={styles.bullets}>{bullets}</ul>
         <h6>Stats for Nerds</h6>
         <div className={`${styles.moreInfoCont} ${global.indentMain5}`}>
            <div className={`${styles.detailsCont} `}>
                  {details}    
            </div>
         </div>
      </div>
   )
}