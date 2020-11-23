import StickyNote from '../components/stickyNote';
import styles from '../styles/skills.module.css';
import global from '../styles/global.module.css';
import { useEffect, useState } from 'react';


export default function Skills({skills}) {

   const [familiar,setFamiliar] = useState([]);
   const [proficient, setProficient] = useState([]);
   const [experienced, setExperienced] = useState([]);

   useEffect(() => {
      let skillFam = [];
      for (const [i,v] of skills['familiar'].entries()) {
         let iconStyle = {
            transform: `rotate(${Math.random() * 50 - 25}deg)`
         };
         skillFam.push(
            <div key={i.toString()} className={styles.detail} style={iconStyle}>
               <i className={`devicon-${v}-plain colored`}></i>
               <h6>{v}</h6>
            </div>
         )
      }
      setFamiliar(skillFam);
   }, []);
   useEffect(() => {
      let skillProf = [];
      for (const [i,v] of skills['proficient'].entries()) {
         let iconStyle = {
            transform: `rotate(${Math.random() * 50 - 25}deg)`
         };
         skillProf.push(
            <div key={i.toString()} className={styles.detail} style={iconStyle}>
               <i className={`devicon-${v}-plain colored`}></i>
               <h6>{v}</h6>
            </div>
         )
      }
      setProficient(skillProf);
   }, []);

   useEffect(() => {
      let skillExp = [];
      for (const [i,v] of skills['experienced'].entries()) {
         let iconStyle = {
            transform: `rotate(${Math.random() * 50 - 25}deg)`
         };
         skillExp.push(
            <div key={i.toString()} className={styles.detail} style={iconStyle}>
               <i className={`devicon-${v}-plain colored`}></i>
               <h6>{v}</h6>
            </div>
         )
      }
      setExperienced(skillExp);
   }, []);



   

   return (
      <section className={`${styles.sectionCont} ${global.offwhite}`}>

         <div className={styles.colsCont}>
            <div className={styles.col}>
               <StickyNote 
                  tilt="-10"
                  text="Familiar"
               >
               </StickyNote>
               <div className={styles.iconsCont}>
                  {familiar}
               </div>
            </div>
            <div className={styles.col}>
               <StickyNote 
                  tilt="10"
                  text="Proficient"
               ></StickyNote>
               <div className={styles.iconsCont}>
                  {proficient}
               </div>
            </div>
            <div className={styles.col}>
               <StickyNote 
                  tilt="5"
                  text="Experienced"
               ></StickyNote>
               <div className={styles.iconsCont}>
                  {experienced}
               </div>
            </div>


         </div>
         


      </section>
   )
}