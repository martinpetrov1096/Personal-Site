import React, { useCallback } from 'react';
import { useSpring } from 'react-spring'

import Navigation from './components/navbar';
import Home from './sections/home';
import Timeline from './sections/timeline';
import Skills from './sections/skills';
import Contact from './sections/contact';
import './styles/global.css';


/**
 * Description. @ScrollContext stores the current Y offset
 * on the page. Will be useful for animating components
 */
export const ScrollContext = React.createContext();

function App() {
   const [{ scroll }, setScroll] = useSpring(() => ({ scroll: 0 }));
   const onScroll = useCallback(e => void setScroll({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])
  
   return (
      <ScrollContext.Provider value={scroll}>
         <main className="container" onScroll={onScroll}>  
            <Navigation></Navigation>             
            <Home  onScroll={onScroll}></Home>
            <Timeline></Timeline>
            <Skills></Skills>
            <Contact></Contact>
         </main>
      </ScrollContext.Provider>
   );
}

export default App;
