import React, { useContext, useEffect, useState} from 'react';
import { ScrollContext } from '../App';
import { SectionContext } from '../App';
import styled from 'styled-components'


export default function Navigation() {
   let  sections = useContext(SectionContext);
   let scroll = useContext(ScrollContext);
   let [curTab, setCurTab] = useState(0);
   let [transition, setTransition] = useState(false);

   useEffect(() => {
      if (curTab !== sections.findIndex(s => s.active)) {
         setCurTab(sections.findIndex(s => s.active));
         setTransition(true);
         setTimeout(() => setTransition(false), 475);
      }
   }, [sections]);

   const getBtnStyles = (idx, transition) => {
      return {
         'backgroundPositionX': `${-100 * ( idx - curTab - 1 + (sections.length))}px`,
         'color': `${curTab === idx ? 'white' : 'black'}`,
         'animation': `${curTab === idx ? 'shadowComing 1s 0' : 'shadowLeaving 1s 0s'}`,
         'boxShadow': transition && curTab === idx ? 'inset 3px 3px 6px #b3b3b0, inset -3px -3px 6px #ffffff' : 'none',
      };
   };


   return (
      <Nav scrolled={scroll.amount > .1}>
         <ButtonCont>
            { sections.map((s, i) => <Button key={s.name + '_navbar'} numSections={sections.length} style={getBtnStyles(i, transition) } href={'#' + s.name.toLowerCase()}>{s.name}</Button>) }
         </ButtonCont>
      </Nav>
   )
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Nav = styled.nav`
   position: fixed;
   z-index: 5;
   box-shadow: ${(props) => props.scrolled ? props.theme.boxShadowSmall : 'none'};
   padding: ${props => props.scrolled ? '10px' : '50px' } 10px 10px 10px;
   width: calc(100% - 20px);
   height: 45px;
   background: ${(props) => props.theme.bgColor};
   transition: padding .3s ease-in-out, box-shadow .2s ease-out;
   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: flex-start;
   /* @media screen and (max-width: 600px) {
      justify-content: space-around;
   } */
   @media screen and (max-width: 600px) {
      padding: 10px;
      height: 25px;
   }

`;

const ButtonCont = styled.div`
   flex-basis: 300px;
   flex-grow: 1;
   max-width: 500px;
   padding-left: 10px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;
   @media screen and (max-width: 600px) {
      padding: 0;
   }
`;

const Button = styled.a`
   border-radius: 5px;
   border: none;
   padding: 12px;
   
   width: 55px;
   
   text-decoration: none;
   font-family: 'Oswald', sans-serif;
   font-size: 16px;
   font-weight: 400;
   
   
   background-size: ${props => props.numSections * 100}px 50px;
   background-repeat: no-repeat;
   background-image: linear-gradient(to right, ${props => props.theme.bgColor} ${props => (props.numSections - 1) * 100}px,
                                               ${props => props.theme.accentColor} ${props => (props.numSections - 1) * 100}px,
                                               ${props => props.theme.accentColor} ${props => props.numSections * 100}px);
   transition: background-position-x .3s ease-in-out .3s,
               color .3s ease-in-out .3s,
               box-shadow .5s ease-in-out 0s;

   &:focus {
      outline: none;
   }
   &:hover {
      text-decoration: underline;  
   }
   display: flex;
   flex-flow: row;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 600px) {
      border-radius: 3px;
      width: 40px;
      padding: 7px;
      font-size: 13px;
   }

 `;