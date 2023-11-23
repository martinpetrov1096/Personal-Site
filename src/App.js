import './styles/reset.css';
import './styles/root.css';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/navbar';
import Home from './sections/home';
import Resume  from './sections/resume';
import Portfolo from './sections/portfolio';
import Skills from './sections/skills';
import About from './sections/about';
import themes from './config/themes.json';
import Contact from './sections/contact';

export const ScrollContext = React.createContext();
export const SectionContext = React.createContext();

const sectionsConfig = [
   { 'name': 'HOME', 'elem': Home },
   { 'name': 'RESUME', 'elem': Resume},
   {'name': 'ABOUT', 'elem': About},
   { 'name': 'PORTFOLIO', 'elem': Portfolo },
   { 'name': 'SKILLS', 'elem': Skills },
   { 'name': 'CONTACT', 'elem': Contact }
]


export default function App() {
   /**
    * @scroll represents the scroll position
    * in pixels from the top. After 100ms, set
    * recent to false on the scroll
    */
   const [scroll, setScroll] = useState({value: 0, recent: false});
  
   /**
    * Add an event listener to listen 
    * to the current scroll position
    * on the page
    */
   useEffect(() => {
      const onScroll = (e => {
         setScroll({ value: (window.scrollY / (window.innerHeight)), recent: true});
         setTimeout(() => setScroll(prevState => ({...prevState, recent: false})), 1000);
       });
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const sections = useMemo(() => {
      const mySections = JSON.parse(JSON.stringify(sectionsConfig))
      const sectionElems = Array.from(document.getElementsByTagName('section'))
         .map((s) => s.getBoundingClientRect().bottom);

      mySections.map(s => s.active = false)
      for (const [i,v] of sectionElems.entries()) {
         if (v >= 0) {
            mySections[i].active = true;
         }
      }
      return mySections;
   });


   return (
      <ThemeProvider theme={themes}>
           <ScrollContext.Provider value={scroll}>
            <SectionContext.Provider value={sections}>
               <NavBar scroll={scroll}/>
                  <Main>
                  { sectionsConfig.map(s => <s.elem key={s.name} id={s.name.toLowerCase()}/>) }
                  </Main>
               </SectionContext.Provider>
            </ScrollContext.Provider>
      </ThemeProvider>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Main = styled.main`

   background: ${(props) => props.theme.bgColor};
   transition: ${(props) => props.theme.transition};
   display: flex;
   flex-flow: column nowrap;
   align-items: center;

`;
