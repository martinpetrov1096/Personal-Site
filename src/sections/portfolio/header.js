import { useMemo } from 'react';
import styled from "styled-components";
import { Paragraph } from '../../styles/global';
import { MdOpenInNew } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";


const PortfolioHeader = ({ title, subtitle, description, tools, projectUrl }) => {

   const toolIcons = useMemo(() => {
      return tools.map((s) => {
           return(
              <Tool key={s}>
                 <i className={`devicon-${s}-plain`} title={s}/>
      
              </Tool>
        )});
     }, [tools]);


   return (
      <Wrapper>
         <Title>{title} {projectUrl ? ( <a href={projectUrl} target="_blank" rel="noopener noreferrer"><OpenInNew/></a>) : ''}</Title>
         <ToolsWrapper>
            <Github/>
            {toolIcons}
         </ToolsWrapper>
         <Description>{description}</Description>
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
   border-radius: 10px;
   padding: 5px;


   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;
`;
const Tool = styled.h5`
   margin: 5px;
   flex: 40px 1 0;
   font-size: 14px;
   font-family: ${props => props.theme.fontSecondary};
   font-weight: normal;

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
const Github = styled(FaGithubSquare)`
   width: 20px;
   height: 20px;
`;

const Title = styled.h1`
    font-family: ${props => props.theme.fontSecondary} !important;
    font-size: min(15vw, 150px);
`;
const OpenInNew = styled(MdOpenInNew)`
   font-size: min(5vw, 50px);
   color: ${props => props.theme.color};
   vertical-align: text-top;
   cursor: pointer;

   &:hover {
      color: ${props => props.theme.accentColor};
   }
`;
const Description = styled(Paragraph)`
    /* font-family: ${props => props.theme.fontSecondary} !important; */
    font-family: 'Roboto', sans-serif;
`;