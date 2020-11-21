import React, { useCallback, useState } from 'react';
import Navigation from './components/navbar';
import Home from './sections/home';
import Resume from './sections/resume';
import Timeline from './sections/timeline';
import Skills from './sections/skills';
import Contact from './sections/contact';
import global from './styles/global.module.css';
import './styles/root.css';
import styles from './styles/app.module.css';

/**
 * Description. @ScrollContext stores the current Y offset
 * on the page. Will be useful for animating components
 */
export const ScrollContext = React.createContext();

function App() {
   const [scroll, setScroll] = useState(0);
   const onScroll = useCallback(e => void setScroll({ scroll: e.target.scrollTop / (window.innerHeight) }), [])
  
   return (
      <ScrollContext.Provider value={scroll}>
         <div className={styles.mainCont}>
            <Navigation pagePos={[0,1,2,3,4]}></Navigation>
            <main className={styles.contentCont} onScroll={onScroll}>  
                  
               <Home></Home>
               <Resume ></Resume>
               <Timeline></Timeline>
               <Timeline></Timeline>
               <Timeline></Timeline>
            </main>
         </div>
         
      </ScrollContext.Provider>
   );
}

export default App;
