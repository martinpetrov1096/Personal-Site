import React, { useCallback, useMemo, useState } from 'react';
import Navigation from './components/navbar';
import global from './styles/global.module.css';
import './styles/root.css';
import styles from './styles/app.module.css';
import themes from './config/themes.json';
import styled, { ThemeProvider } from 'styled-components';
/**
 * Description. @ScrollContext stores the current Y offset
 * on the page. Will be useful for animating components
 */
export const ScrollContext = React.createContext();
export const SectionContext = React.createContext();


function App({sectionProps}) {
   const [scroll, setScroll] = useState(0);
   
   
   const onScroll = useCallback(e => void setScroll({ scroll: e.target.scrollTop / (window.innerHeight) }), [])
   
   const section = useMemo(() => {
      const mySections = JSON.parse(JSON.stringify(sectionProps))

      const sectionElems = Array.from(document.getElementsByTagName('section'))
         .map((s) => s.getBoundingClientRect().bottom);

      for (const [i,v] of sectionElems.entries()) {
         if (v >= 0) {
            mySections[i].active = true;
         }
      }
      return mySections;
   });

   return (
      <ScrollContext.Provider value={scroll}>
         <SectionContext.Provider value={section}>
            <div className={styles.mainCont}>
               <Navigation pagePos={[0,1,2,3,4]}></Navigation>
               <main className={styles.contentCont} onScroll={onScroll}>  
                  { sectionProps.map(s => s.elem) }
               </main>
            </div>
         </SectionContext.Provider>

      </ScrollContext.Provider>
   );
}

export default App;
