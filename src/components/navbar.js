import React, { useState } from 'react';

import styles from '../styles/components/navbar.module.css';
import '../styles/global.css';

export default function Navigation(props) {

   const [tab, setTab] = useState(0);

   return (
      <nav className="offwhite">
         <button
            className={tab === 0 ? `${styles.selected} blueText` : ""}
            onClick={ () => setTab(0)}
         >
            Home
         </button>
         <button
            className={tab === 1 ? `${styles.selected} blueText` : ""}
            onClick={ () => setTab(1)}
         >
            Projects
         </button>
         <button 
            className={tab === 2 ? `${styles.selected} blueText` : ""}
            onClick={ () => setTab(2)}
         >
            Skills
         </button>
         <button 
            className={tab === 3 ? `${styles.selected} blueText` : ""}
            onClick={ () => setTab(3)}
         >
            Contact
         </button>
      </nav>
   )
}