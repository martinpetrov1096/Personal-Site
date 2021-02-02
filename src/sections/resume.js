import React from 'react';
import styled from 'styled-components';
import StickyNote from '../components/stickyNote';
import { Section } from '../styles/global';
/**
 * 
 * @param {number} props.scroll The amount scroll
 * from the top of the page, in pixels
 */
export const Resume = ({scroll}) => {

   return(
      <Section visible="light">
         <Img src='resume.svg' unshift={scroll}/>

            <StickyNote 
               tilt="10"
               text="Busy? Here's my resume"
               subText="(TODO: Add download button)"
            ></StickyNote>


      </Section>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Img = styled.img`
   position: relative;
   width: 40vw;
   height: auto;
   z-index: 1;
   box-shadow: ${(props) => props.unshift 
      ? props.theme.boxShadowSmall 
      : props.theme.boxShadowBig};
   overflow-x: hidden;
   transition: all .5s ease-in-out;

   filter: ${(props) => props.theme.name === 'dark' 
      ? `brightness(70%)` 
      : `brightness(100%)`};
   /**
    * Unshift the image if we are on the resume section
   */
   transform: ${(props) => props.unshift 
      ? `translate3d(0,0,0) rotate(0) scale(1)` 
      : `translate3d(-20vw, 0vh, 0) rotate(-22deg) scale(1.2)`};

   @media screen and (max-width: 1000px) {
      width: 80vw;
   }
`;

const StickyNoteWrapper = styled.div`
   flex-shrink: 2;
   flex-basis: 400px;
   height: 300px;

   @media screen and (max-width: 1000px) {
      padding-top: 100px;
      flex-basis: 200px;
   }
`;