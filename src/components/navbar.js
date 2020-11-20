import React, { useState } from 'react';

import styles from '../styles/components/navbar.module.css';
import global from '../styles/global.module.css';


export default function Navigation(props) {

   const [tab, setTab] = useState(0);

   return (
      <nav className= {`${global.offwhite} ${global.card10}`}>
         <button
            className={tab === 0 ? `${global.indent5} ${global.blueText}` : ""}
            onClick={ () => setTab(0)}
         >
            Home
         </button>
         <button
            className={tab === 1 ? `${global.indent5}  ${global.blueText}` : ""}
            onClick={ () => setTab(1)}
         >
            Resume
         </button>
         <button
            className={tab === 2 ? `${global.indent5}  ${global.blueText}` : ""}
            onClick={ () => setTab(2)}
         >
            Projects
         </button>
         <button 
            className={tab === 3 ? `${global.indent5}  ${global.blueText}` : ""}
            onClick={ () => setTab(3)}
         >
            Skills
         </button>
         <button 
            className={tab === 4 ? `${global.indent5}  ${global.blueText}` : ""}
            onClick={ () => setTab(4)}
         >
            Contact
         </button>
      </nav>
   )
}