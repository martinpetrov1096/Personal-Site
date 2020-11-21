import NavText from '../components/navText';
import ProjectCard from '../components/projectCard';
import global from '../styles/global.module.css';
import styles from '../styles/timeline.module.css';


export default function Timeline(props) {
   return (
      <section className={styles.container}>  
         <div>Odometer</div>         
         <div className={`${styles.line} ${global.blue} ${global.indentAccent}`}></div>
            <ProjectCard></ProjectCard>
         <NavText section="Projects"></NavText>
         
      </section>
   )
}