import React, { useContext, useEffect } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import {useSpring } from 'react-spring'
import resume from '../resume.svg';
import styles from '../styles/resume.module.css';
import global from '../styles/global.module.css';

export default function Resume() {

   let pos = useContext(ScrollContext);
   const [{ scroll }, setScroll] = useSpring( () => ({ scroll: 0 }));
   useEffect(() => {
      setScroll(pos);
   }, [pos])

       
   const transform = scroll.interpolate({
      range: [0,1],
      output: [0, 100],
      extrapolate: 'clamp' 
   })
   .interpolate(s => {
      return `translate3d(${s * (10/100) - 10}vw,${s * (10/100)-10}vh,0) rotate(${(s * 10/100)-22}deg)`;      
     //return `translate3d(0,0,0) rotate(-20deg)`;
   });
   return(
      <section className={`${styles.cont} ${global.offwhite}`}>
         <animated.img src={resume} style={{transform }} className={`${styles.img} ${global.card10}`}></animated.img>
         <div className={`${global.card10} ${styles.notecard}`}>
            <h2>Busy?</h2>
            <h2>Here's my resume</h2>

         </div>
      </section>
   )
}
