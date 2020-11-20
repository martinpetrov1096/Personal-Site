import React, { useState, useEffect, useContext } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import NavText from '../components/navText';
import resume from '../resume.svg';
import styles from '../styles/resume.module.css';
import global from '../styles/global.module.css';

export default function Resume() {
   let scroll = useContext(ScrollContext)
   
   const transform = scroll.interpolate({
      range: [0,1.5],
      output: [0, 100],
      extrapolate: 'clamp' 
   })
   .interpolate(s => {
      return `translate3d(${s * (30/100) - 30}vw,${s * (40/100)-40}vh,0) rotate(${(s * 32/100)-32}deg)`;      
   });
   return(
      <div className={styles.container}>
         <animated.img src={resume} style={{transform }} className={`${styles.img} ${global.card10}`}></animated.img>
         <NavText section="Resume"></NavText>
      </div>
   )
}
