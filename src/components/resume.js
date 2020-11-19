import React, { useState, useEffect, useContext } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import resume from '../resume.svg'
import styles from '../styles/resume.module.css';

export default function Resume({start, end}) {
   let scroll = useContext(ScrollContext)
   
   const transform = scroll.interpolate({
     
      output: [0, 200],
      extrapolate: 'clamp' 
   })
   .interpolate(s => {

     //console.log(s)
     
         return `translate3d(0px,${s}px,0) rotate(${-s/30-32}deg)`;
      
      
   });
 

   
   return <animated.img src={resume} style={{transform }} className={styles.img}></animated.img>
}
