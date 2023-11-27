import React, { useRef } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { Section } from '../styles/global';
import { ScrollContext } from '../App';
import { FaDownload } from "react-icons/fa";
import { Title, Subtitle } from '../styles/global';

/**
 * 
 * @param {number} props.scroll The amount scroll
 * from the top of the page, in pixels
 */
 const Resume = () => {
   let scroll = useContext(ScrollContext);
   const busyTextRef = useRef(null);
   const subtitleTextRef = useRef(null);

   return(
      <Section id="resume">
         <SectionWrapper>
         
            <ColWrapper>
               <Img src='resume/resume.svg' alt="Martin Petrov's Resume" $unshift={scroll.value !== false && scroll.value >  .2}/>
            </ColWrapper>
            <ColWrapper>
               <BusyTitle ref={busyTextRef}>Busy?</BusyTitle>
               <Subtitle ref={subtitleTextRef}>Here's the summarized version.</Subtitle>
               <DownloadButton/>
            </ColWrapper>
         </SectionWrapper>
      </Section>
   );
}
export default Resume;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const SectionWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   padding-top: 200px;
`;
const ColWrapper = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
`;
const Img = styled.img`
   width: 40vw;
   height: auto;
   z-index: 1;
   box-shadow: ${(props) => props.$unshift ? props.theme.boxShadowSmall : props.theme.boxShadowBig};
   overflow-x: hidden;
   transition: all .5s ease-in-out;
   /**
    * Unshift the image if we are on the resume section
   */
   transform: ${(props) => props.$unshift 
      ? `translate3d(0,0,0) rotate(0) scale(1)` 
      : `translate3d(-20vw, -60vh, 0) rotate(-22deg) scale(1.2)`};

   @media screen and (max-width: 1000px) {
      width: 80vw;
   }
`;
const BusyTitle = styled(Title)`
`;
const DownloadButton = styled(FaDownload)`
 
   border-radius: 100%;
   padding: 20px;
   background-color: ${(props) => props.theme.accentColor};
   color: white;
   font-family: ${(props) => props.theme.subtitleFont};
   font-size: 24px;
   cursor: pointer;
   align-self: center;

`;
