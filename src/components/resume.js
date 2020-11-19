import React, { useState, useEffect, useContext } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import resume from '../resume.svg'
import styles from '../styles/resume.module.css';

export default function Resume({start, end}) {
 
   const transform = useContext(ScrollContext).interpolate({
      range: [start, end],
      output: [0, 300],
      extrapolate: 'clamp' 
   })
   .interpolate(s => `translate3d(${s}px,${s}px,0) rotate(${s/8 - 32}deg`);
   return <animated.img src={resume} style={{transform }} className={styles.img}></animated.img>
}
