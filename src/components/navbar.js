import React from 'react';
import TextTransition from 'react-text-transition';
import styled from 'styled-components'
import sections from '../config/sections.json';

import styles from '../styles/components/navbar.module.css';

export default function Navigation(props) {
   let classes = [
      styles.shift1,
      styles.shift2,
      styles.shift3,
      styles.shift4,
      styles.shift5,
      styles.shift6,
      styles.shift7,
      styles.shift8,
      styles.shift9,
      styles.shift10,
      styles.shift11,
   ].reverse();

   const getButtonPos = (btnNum) => {
      const sectionNum = sections.indexOf(props.curTab)

      /* Makes sure there's no overflow */
      if (btnNum - sectionNum + 5 > 11 || btnNum - sectionNum + 5 < 0) {
         return classes[0];
      }
      return classes[btnNum - sectionNum + 5];
   };

   return (
      <Nav>
         <CurTab>
            <TextTransition
               text={props.curTab}
               direction="down"
               noOverflow={true}
               inline={true}
            />
         </CurTab>
         <ButtonCont>
            <button className={getButtonPos(0)}></button>
            <button className={getButtonPos(1)}></button>
            <button className={getButtonPos(2)}></button>
            <button className={getButtonPos(3)}></button>
            <button className={getButtonPos(4)}></button>
         </ButtonCont>
      </Nav>
   );
}

const Nav = styled.nav`
   position: fixed;
   z-index: 99;
   padding: 10px;
   width: calc(100% - 20px);
   height: 50px;

   align-self: center;
   background: ${(props) => props.theme.bgColor};

   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: center;
   transition: ${(props) => props.theme.transition};
`;

const CurTab = styled.h3`
   border-radius: 5px;
   padding: 10px;
   min-width: 40px;
   flex-basis: 100px;
   flex-shrink: 2;
   flex-grow: 0;
   background: ${(props) => props.theme.contentBgColor};
   color: ${(props) => props.theme.color};
   font-family: 'Oswald', sans-serif;
   font-size: 22px;
   font-weight: 400;
   text-align: center;
   box-shadow: ${(props) => props.theme.boxShadowInset};
   transition: ${(props) => props.theme.transition};

   @media screen and (max-width: 400px) {
      border-radius: 3px;
      font-size: 16px;
      flex-basis: 40px;
      padding: 10px;
   }
`;

const ButtonCont = styled.div`
   flex-basis: 300px;
   flex-grow: 1;
   max-width: 500px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;

   @media screen and (max-width: 400px) {
      flex-basis: 150px;
      flex-grow: 0;
   }
   &> button {  
      border-radius: 100%;
      border: none;
      height: 30px;
      width: 30px;
      background-size: 1100px 100px;
      background-image: linear-gradient(90deg, ${(props) => props.theme.contentBgColor} 500px, ${(props) => props.theme.accentColor} 500px 600px, ${(props) => props.theme.contentBgColor} 600px 1100px);
      transition: all .4s ease-in-out;
      box-shadow: ${(props) => props.theme.boxShadowInset};
      @media screen and (max-width: 400px) {
         height: 20px;
         width: 20px;
      }
   }
`;