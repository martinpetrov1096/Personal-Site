import React, { useMemo } from 'react';
import TextTransition from 'react-text-transition';
import styled from 'styled-components'
import sections from '../config/sections.json';

export default function Navigation({scroll, curTab}) {

   const sectionNum = useMemo(() => {
      return sections.indexOf(curTab);
   }, [curTab]);

   return (
      <Nav raised={scroll}>
         <CurTab>
            <TextTransition
               text={curTab}
               direction="down"
               noOverflow={true}
               inline={true}
            />
         </CurTab>
         <ButtonCont>
            <Button num={0-sectionNum + 6}></Button>
            <Button num={1-sectionNum + 6}></Button>
            <Button num={2-sectionNum + 6}></Button>
            <Button num={3-sectionNum + 6}></Button>
            <Button num={4-sectionNum + 6}></Button>
         </ButtonCont>
      </Nav>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Nav = styled.nav`
   position: fixed;
   z-index: 99;
   box-shadow: ${(props) => props.raised ? props.theme.boxShadowSmall : `none`};

   padding: 10px;
   width: calc(100% - 20px);
   height: 50px;
   align-self: center;
   background: ${(props) => props.theme.bgColor};
   transition: ${(props) => props.theme.transition}, box-shadow .2s ease-in-out;


   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: center;

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
   max-width: 500px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;

   @media screen and (max-width: 400px) {
      flex-basis: 150px;
   }

`;

const Button = styled.button`
   border-radius: 100%;
   border: none;
   height: 30px;
   width: 30px;
   background-size: 1100px 100px;
   /* background-image: linear-gradient(90deg, ${(props) => props.theme.contentBgColor} 500px, ${(props) => props.theme.accentColor} 500px 600px, ${(props) => props.theme.contentBgColor} 600px 1100px); */
   background-color: ${(props) => props.num === 6 ? props.theme.accentColor : props.theme.contentBgColor};
   background-position: ${(props) => 1200 - (props.num * 100)}px 0;
   transition: ${(props) => props.theme.transition}, background-color .5s ease-in-out, background-image 1s ease-in-out, box-shadow .5s ease-in-out;
   box-shadow: ${(props) => props.num === 6 ? props.theme.boxShadowInsetAccent : props.theme.boxShadowInset};
   
   @media screen and (max-width: 400px) {
      height: 20px;
      width: 20px;
   }
`;