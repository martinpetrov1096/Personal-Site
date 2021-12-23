import React, { useContext, useEffect, useState} from 'react';
import TextTransition from "react-text-transition";
import { ScrollContext } from '../App';
import { SectionContext } from '../App';
import styled from 'styled-components'

import styles from '../styles/components/navbar.module.css';
import global from '../styles/global.module.css';

export default function Navigation({pagePos}) {
   let {scroll} = useContext(ScrollContext);
   let  sections = useContext(SectionContext);


   let [curTab, setCurTab] = useState(0);

   //let [mobileTab, setMobileTab] = useState('');
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
      /* Makes sure there's no overflow */
      if (btnNum - curTab + 5 > 11 || btnNum - curTab +5 < 0) {
         return classes[0];
      }
      return classes[btnNum - curTab + 5];
   };

   useEffect(() => {
      if (curTab !== sections.findIndex(s => s.active)) {
         console.log('here')
         setCurTab(sections.findIndex(s => s.active));
      }

   }, [sections]);

   return (
      <Nav>

         <ButtonCont>
            { sections.map((s, i) => <Button className={getButtonPos(i)}>{s.name}</Button>) }
         </ButtonCont>
      </Nav>
   )
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Nav = styled.nav`
   position: fixed;
   z-index: 99;
   /* 
    * If not at top of page, give a shadow to 
    * navbar
   */
   box-shadow: ${(props) => true
      ? props.theme.boxShadowSmall 
      : `none`};
   padding: 10px;
   width: calc(100% - 20px);
   height: 50px;
   background: ${(props) => props.theme.bgColor};
   transition: ${(props) => props.theme.transition}, box-shadow .2s ease-in-out;
   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: flex-start;
   @media screen and (max-width: 400px) {
      justify-content: space-around;
   }
`;

const CurTab = styled.h3`
   border-radius: 5px;
   padding: 10px;
   min-width: 40px;
   flex-basis: 100px;
   flex-shrink: 2;
   flex-grow: 0;
   background: ${(props) => props.theme.contentBgColor};
   color: ${(props) => props.theme.accentColor};
   font-family: 'Oswald', sans-serif;
   font-size: 22px;
   font-weight: 400;
   text-align: center;
   box-shadow: ${(props) => props.theme.boxShadowInset};
   transition: ${(props) => props.theme.transition};
   @media screen and (max-width: 400px) {
      border-radius: 3px;
      font-size: 16px;
      flex-basis: 60px;
      padding: 10px;
   }
`;
const ButtonCont = styled.div`
   flex-basis: 300px;
   flex-grow: 1;
    max-width: 600px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;
   @media screen and (max-width: 400px) {
      flex-basis: 150px;
   }
`;

const Button = styled.a`

    border-radius: 5px;
    border: none;
    padding: 10px;
    height: 30px;
    width: 70px;
    background-size: 1100px 100px;

    color: #376283;
    background-image: linear-gradient(to right, white 100px 500px, #376283 500px 600px, white 600px 1100px);
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
    font-weight: 400;

    
    
    transition: background-position-x .35s ease-in-out .35s;
    &:focus {
        outline: none;
    } 

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
 `;