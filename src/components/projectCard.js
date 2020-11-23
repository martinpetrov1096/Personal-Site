import { useState } from 'react';

import global from '../styles/global.module.css';
import styles from '../styles/components/projectCard.module.css';

import 'devicon';
export default function ProjectCard({project}) {

   const bullets = [];
   const details = [];
   const [detailsHidden, setdetailsHidden] = useState(true);
   for (const [i,v] of project.accomplishments.entries()){
      bullets.push(<li key={i.toString()}>{v}</li>);
   }
   const toggleVis = () => {
      setdetailsHidden(!detailsHidden);
   }

   /* Add language icons */
   for (const [i,v] of project.tools.entries()){
      details.push(
         <div key={i.toString()} className={styles.detail}>
            <i className={`devicon-${v}-plain colored`}></i>
            <h6>{v}</h6>
         </div>
      );
   }
   /* Add LOC to details */
   details.push(
      <div key={"loc"} className={styles.detail}>
         <h4>{project.linesOfCode}</h4>
         <h6>Lines of Code</h6>
      </div>
   );

   /* Add # of commits to details */
   details.push(
      <div key={"commits"} className={styles.detail}>
         <h4>{project.numCommits}</h4>
         <h6>My Commits</h6>
      </div>
   );

   /* Add the github repo to commits */
   details.push(
      <div key={"gitUrl"} className={styles.detail}>
         <i className={`devicon-github-plain colored`}></i>
         <a href={project.githubUrl}>Github URL</a>
      </div>
   );

   return (
      <div className={`${styles.cont} ${global.card10}`}>
     
         <h4 className={`${global.accentText}`}>{project.name}</h4>

         <p>{project.description}</p>
         <h5>My Accomplishments</h5>
         <ul>{bullets}</ul>
         <h5 onClick={toggleVis}>Project Tools and Stats</h5>
         
         <div className={`${styles.detailsCont} ${global.indentMain5} ${detailsHidden ? styles.detailsHidden : ''}`}>
            {details}    
         </div>
      </div>
   )
}