import React, { useContext, useEffect } from 'react';
import {ScrollContext} from '../App';
import { animated } from 'react-spring';
import {useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import resume from '../resume.svg';
import styles from '../styles/resume.module.css';
import global from '../styles/global.module.css';

export default function Resume({id}) {

   let pos = useContext(ScrollContext);
   const alignCenter = { display: 'flex', alignItems: 'center' }

   const [{ scroll }, api] = useSpring( () => ({ scroll: 0 }));
   useEffect(() => {
 //     api.start({ scroll: 0});
      console.log(pos.amount)
    console.log(api);
   })

       
   const transform = scroll.interpolate({
      range: [0,1],
      output: [0, 100],
      extrapolate: 'clamp' 
   })
   .interpolate(s => {
       console.log(s)
      return `translate3d(${s * (30/100) - 30}vw,${s * (40/100)-40}vh,0) rotate(${(s * 32/100)-32}deg)`;      
   });
   return(
      <section className={styles.container} id={id}>
         <animated.img src={resume} style={{transform }} className={`${styles.img} ${global.card10}`}></animated.img>

         {/* <Parallax pages={4}>
            <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
            <p className={styles.scrollText}>Scroll down</p>
         </ParallaxLayer>

         <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
            <div className={`${styles.card} ${styles.sticky}`}>
               <p>I'm a sticky layer</p>
            </div>
         </ParallaxLayer>

         <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
               <p>I'm not</p>
            </div>
         </ParallaxLayer>

         <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
               <p>Neither am I</p>
            </div>
         </ParallaxLayer>

         </Parallax> */}

      </section>
   )
}
