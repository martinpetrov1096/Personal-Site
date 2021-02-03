import './styles/reset.css';
import './styles/root.css';

import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from './components/navbar';
import { Home } from './sections/home';
import { Resume } from './sections/resume';
import { Portfolio } from './sections/portfolio';
import { Skills } from './sections/skills';
import { About } from './sections/about';
import sections from './config/sections.json';
import themes from './config/themes.json';
import { Contact } from './sections/contact';



export default function App() {
   
   /**
    * @mainRef is attactched to the main html
    * element on the page. It is useful so that
    * we can get the children (which should all
    * be section divs).
    */
   const mainRef = useRef(null);

   /**
    * @scroll represents the scroll position
    * in pixels from the top
    */
   const [scroll, setScroll] = useState(0);

   /**
    * @curSection represents the current section
    * that the user is looking at
    */
   const [curSection, setCurSection] = useState('home');

   /**
    * Add an event listener to listen 
    * to the current scroll position
    * on the page
    */
   useEffect(() => {
      const listenToScroll = () => {
         setScroll(() => {
            return window.scrollY;
         });
      }
      window.addEventListener('scroll', listenToScroll);
   }, []);





   useEffect(() => {
      /**
       * Grab all of the children to the main element (should be
       * all section elements). Then, calc the absolute value of 
       * the top of each div to see what section we're closest to
       */
      const sectionPos = Array.from(mainRef.current.childNodes).map((x) => x.getBoundingClientRect().bottom);


      for (const [i,s] of sectionPos.entries()) {
     //    console.log('i: ' + i +  ' Scroll: ' + scroll , ' s: ' + s);
         if (s > 400 && scroll > s) {
            setCurSection(sections[i]);
            break;
         }
      }

   }, [scroll]);

   useEffect(() => { // TODO: Can remove eventually
      console.log(curSection);
   }, [curSection]);


   const [theme, setTheme] = useState(themes.light);

   useEffect(() => {
      switch(curSection) {
         case 'HOME':
         case 'RESUME':
         case 'ABOUT':
         case 'CONTACT':
         default:
            setTheme(themes.light);
            break;
         case 'PORTFOLIO':
         case 'SKILLS':
            setTheme(themes.dark);
            break;
      }
   }, [curSection]);

   return (
      <ThemeProvider theme={theme}>
         <Navigation curTab={curSection} scroll={scroll}/>
         <Main ref={mainRef}>
            <Home/>
            <Resume scroll={scroll}/>
            <About curTab={curSection}/>
            <Portfolio curTab={curSection}/>
            <Skills/>
            <Contact/>
         </Main>
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