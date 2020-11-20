import React, { useCallback } from 'react';
import {useSpring } from 'react-spring'
import {  } from 'react-spring'
import Navigation from './components/navbar';
import Home from './sections/home';
import Resume from './sections/resume';
import Timeline from './sections/timeline';
import Skills from './sections/skills';
import Contact from './sections/contact';
import global from './styles/global.module.css';
import './styles/root.css';


/**
 * Description. @ScrollContext stores the current Y offset
 * on the page. Will be useful for animating components
 */
export const ScrollContext = React.createContext();

function App() {
   const [{ scroll }, setScroll] = useSpring( () => ({ scroll: 0 }));
   const onScroll = useCallback(e => void setScroll({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])
  
   return (
      <ScrollContext.Provider value={scroll} style={{color: 'red !important'}} >
         <main className={global.container} onScroll={onScroll}>  
       
            <Home  onScroll={onScroll}></Home>
            <Resume ></Resume>
            <Timeline></Timeline>
            <Skills></Skills>
            <Contact></Contact>
         </main>
      </ScrollContext.Provider>
   );
}

export default App;
