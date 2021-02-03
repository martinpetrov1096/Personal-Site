import React, { useCallback, useMemo } from 'react';
import TextTransition from 'react-text-transition';
import styled from 'styled-components'
import sections from '../config/sections.json';

export const NavBar = ({curTab, scroll}) => {

   const headers = useMemo(() => {
      return sections.map((s) => {
         if (s === curTab) {
            console.log(s);
            return <CurTab key={s}>{s}</CurTab>
         } else {
            return <Tab key={s}>{s}</Tab>
         }
      });
   }, [curTab]);


   return (
      <Nav shadow={scroll}>
         <TabWrapper>
            {headers}
         </TabWrapper>
      </Nav>
   );

}

const Nav = styled.nav`
   position: fixed;
   z-index: 99;
   box-shadow: ${(props) => props.shadow ? props.theme.boxShadowBig : 'none'};
   height: 50px;
   width: 100%;
   background-color: ${(props) => props.theme.bgColor};
   display: flex;
   flex-flow: row nowrap;
`;

const Tab = styled.h4`
   border-radius: 5px;
   padding: 8px;
   color: ${(props) => props.theme.color};
   font-family: ${(props) => props.theme.subtitleFont};
   font-size: 20px;
`;

const CurTab = styled(Tab)`
   color: ${(props) => props.theme.accentColor};
   text-decoration: underline;
`;

const TabWrapper = styled.div`
   width: 100%;
   max-width: 700px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;
   align-items: center;

`;