import React, { useCallback, useMemo, useState } from 'react';
import Navigation from './components/navbar';
import './styles/root.css';
import themes from './config/themes.json';
import styled, { ThemeProvider } from 'styled-components';
/**
 * Description. @ScrollContext stores the current Y offset
 * on the page. Will be useful for animating components
 */
export const ScrollContext = React.createContext();
export const SectionContext = React.createContext();


function App({sectionProps}) {
   const [scroll, setScroll] = useState({amount: 0, recent: false});
   //const [recentScroll, setRecentScroll] = useState(false);

   
   const onScroll = (e => {            
      setScroll({ amount: e.target.scrollTop / (window.innerHeight), recent: true});
      // setTimeout(() => setScroll({...scroll, recent: false}), 1000);
    });
   
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
      <ThemeProvider theme={themes}>
         <ScrollContext.Provider value={scroll}>
            <SectionContext.Provider value={section}>
               <Main>
                  <Navigation/>
                  <Content onScroll={onScroll}>  
                     { sectionProps.map(s => <s.elem key={s.name} id={s.name.toLowerCase()}/>) }
                  </Content>
               </Main>
            </SectionContext.Provider>
         </ScrollContext.Provider>
      </ThemeProvider>
   );
}

export default App;


///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Main = styled.main`
   display: flex;
   flex-flow: row-reverse nowrap;
   height: 100% !important;
   width: 100% !important;
   background-color: ${props => props.theme.bgColor};
`
const Content = styled.div`
   height: 100% !important;
   display: flex;
   flex-flow: column;
   position: relative;
   flex-grow: 1;
   overflow: hidden;
   overflow-y: scroll;
   -ms-overflow-style: none;  /* IE and Edge */
   scrollbar-width: none;  /* Firefox */
`;