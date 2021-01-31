import './styles/reset.css';
import './styles/root.css';

import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from './components/navbar';
import { Home } from './sections/home';
import { Resume } from './sections/resume';
import { Portfolio } from './sections/portfolio';
import sections from './config/sections.json';
import themes from './config/themes.json';



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
      const sectionPos = Array.from(mainRef.current.childNodes).map((x) => Math.abs(x.getBoundingClientRect().top));
      let curMin = sectionPos[0];
      let minIdx = 0;
      sectionPos.forEach((s,i) => {
         if (s < curMin) {
            curMin = s
            minIdx = i;
         }
      });

      setCurSection(sections[minIdx]);
   }, [scroll]);

   useEffect(() => { // TODO: Can remove eventually
      console.log(curSection);
   }, [curSection]);


   const [theme, setTheme] = useState(themes.light);

   useEffect(() => {
      if (curSection === 'PROJECTS') {
         setTheme(themes.dark);
      } else {
         setTheme(themes.light);
      }
   }, [curSection]);

   return (
      <ThemeProvider theme={theme}>
         <Navigation curTab={curSection} scroll={scroll}/>
         <Main ref={mainRef}>
            <Home/>
            <Resume scroll={scroll}/>
            <Portfolio/>
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