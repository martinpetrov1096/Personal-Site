import { useMemo } from 'react';
import styled from "styled-components";
import projects from "../../config/projects.json";
import ProjectCard from "../../components/project-card";
import { Paragraph } from '../../styles/global';

const PortfolioHeader = ({ title, subtitle, description, tools }) => {

    const toolIcons = useMemo(() => {
        return tools.map((s) => {
           /* Since the name for express is different */
           if (s === 'express') {
              return (
                 <Tool key={s}>
                    <i className={`devicon-express-original colored`}/>
             
                 </Tool>
                 );
           }
           return(
              <Tool key={s}>
                 <i className={`devicon-${s}-plain colored`}/>
        
              </Tool>
        )});
     }, [tools]);


  return (
    <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <ToolsWrapper>
            {toolIcons}
        </ToolsWrapper>
        <Paragraph>{description}</Paragraph>
    </Wrapper>

  );
};
export default PortfolioHeader

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

`;




const ToolsWrapper = styled.div`
   margin: 10px;
   border-radius: 10px;
   padding: 10px;


   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;
`;


const Tool = styled.div`
   margin: 5px;
   flex: 40px 1 0;

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   > i {
      font-size: 30px;
   }
   > h6 {
      font-family: ${(props) => props.theme.subtitleFont};
      font-size: 12px;
      text-transform: capitalize;
   }


`;

const Title = styled.h1`
    font-family: ${props => props.theme.fontSecondary} !important;
    font-size: min(10vw, 100px);
`;

const Subtitle = styled.h2`
    font-family: ${props => props.theme.fontSecondary} !important;

`;

const Description = styled.p`
    margin-top: 30px;
    max-width: 900px;
    font-size: 18px;
    line-height: 1.5;
`;