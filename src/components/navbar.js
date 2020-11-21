import React, { useContext, useEffect, useState} from 'react';
import TextTransition from "react-text-transition";
import { ScrollContext } from '../App';
import styles from '../styles/components/navbar.module.css';
import global from '../styles/global.module.css';

export default function Navigation({pagePos}) {
   let {scroll} = useContext(ScrollContext);
   let [curTab, setCurTab] = useState(0);

   let [mobileTab, setMobileTab] = useState('');
   let classes = [
      styles.shift1,
      styles.shift2,
      styles.shift3,
      styles.shift4,
      styles.shift5,
      styles.shift6,
      styles.shift7,
      styles.shift8,
      styles.shift9,
      styles.shift10,
      styles.shift11,
   ].reverse();

   let tabs = [
      'HOME',
      'RESUME',
      'PROJECTS',
      'SKILLS',
      'CONTACT'
   ];

   const getButtonPos = (btnNum) => {
      /* Makes sure there's no overflow */
      if (btnNum - curTab + 5 > 11 || btnNum - curTab +5 < 0) {
         return classes[0];
      }
      return classes[btnNum - curTab + 5];
   };

   useEffect(() => {
      let sections = Array.from(document.getElementsByTagName('section'));
      sections = sections.map((s) => s.getBoundingClientRect().bottom );
      for (const [i,v] of sections.entries()) {
         if (v >= 0) {
            setCurTab(i);
            setMobileTab(styles.visible);
            setTimeout(() => setMobileTab(''), 1000);
            break;
         }
      }
   }, [scroll]);

   return (
      <nav>
         <h3 className={`${styles.curTab} ${global.indentMain5} ${global.accentText} ${mobileTab}`}>
            <TextTransition
               text={tabs[curTab]}
               direction="down"
               noOverflow={true}
               inline={true}
            />
         </h3>
         <div className={styles.buttonCont}>
            <button className={getButtonPos(0)}></button>
            <button className={getButtonPos(1)}></button>
            <button className={getButtonPos(2)}></button>
            <button className={getButtonPos(3)}></button>
            <button className={getButtonPos(4)}></button>
         </div>
      </nav>
   )
}