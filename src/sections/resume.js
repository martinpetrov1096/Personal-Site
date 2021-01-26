import React, { useContext, useEffect } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import {useSpring } from 'react-spring'
import styles from '../styles/sections/resume.module.css';
import global from '../styles/global.module.css';
import StickyNote from '../components/stickyNote';
export default function Resume(props) {

   const [{ scroll }, setScroll] = useSpring( () => ({ scroll: 0 }));


   useEffect(() => {
      setScroll({scroll: props.pos/1000});
   }, [props.pos])

       
   const transform = scroll.interpolate({
      range: [0,1],
      output: [0, 100],
      extrapolate: 'clamp' 
   })
   .interpolate(s => {
      //console.log(s);
      return `translate3d(${s * (10/100) - 10}vh,${s * (20/100)-20}vh,0) rotate(${(s * 10/100)-22}deg)`;      
     //return `translate3d(0,0,0) rotate(-20deg)`;
   });
   return(
      <section className={`${styles.cont}`}>
         <animated.img src='resume.svg' style={{transform: transform}}  className={`${styles.img} ${global.card10}`}></animated.img>
         <StickyNote 
            tilt="10"
            text="Busy? Here's my resume"
            subText="(TODO: Add download button)"
         ></StickyNote>
      </section>
   )
}
