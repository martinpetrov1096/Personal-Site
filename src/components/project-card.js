import { useMemo } from 'react';
import styled from 'styled-components';

export const ProjectCard = ({project}) => {
   
   const icons = useMemo(() => {

      return project.tools.map((t) => <i key={t} className={`devicon-${t}-plain`}></i>)


   }, [project.tools]);

   return (
      <Project key={project.name} size={project.size}>
         <BrowserWindow>
            <BrowserButton/>
            <BrowserButton/>
            <BrowserButton/>
         </BrowserWindow>
         <Content fontColor={project.fontColor}>
            <Title href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</Title>
            <h5>{project.description}</h5>
            <IconsWrapper>
               {icons}

            </IconsWrapper>
         </Content>
         <BG src={project.imageUrl}/>
      </Project>
   );
}

const Project = styled.div` 
   margin: max(1%, 20px) 1%;
   border-radius: 10px;
   flex: 480px 0 1;
   transition: ${(props) => props.theme.transform} transform .25s ease-in-out;
   position: relative;
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
`;

const BrowserWindow = styled.div`
   border-radius: 5px 5px 0 0;
   width: 100%;
   height: 30px;
   background-color: ${(props) => props.theme.contentBgColor};
   display: flex;
   align-items: center;
   justify-content: flex-end;   
`;

const BrowserButton = styled.div`
   height: 10px;
   width: 10px;
   border-radius: 50%;
   margin-right: 5px;
   /* Make the window buttons */
   &:nth-of-type(1) {
      background-color: #28ca41;
   }
   &:nth-of-type(2) {
      background-color: #ffbd2e;
   }
   &:nth-of-type(3) {
      background-color: #ff5f57 ;
   }
`;

const BG = styled.img`
   width: 100%;
   border-radius: 0 0 5px 5px;
`;

const Content = styled.div`
   position: absolute;
   border-radius: 5px;
   width: 100%;
   height: 100%;  
   opacity: 0;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
   & > * {
      font-family: 'Varela', sans-serif;
      color: ${(props) => props.fontColor};
      text-align: center;
      padding: 3%;
   }
   & > h3 {
      font-size: 28px;
   }
   & > h5 {
      font-size: 14px;
   }
   transition: backdrop-filter .2s ease-in, opacity .2s ease-in;
   &:hover {
      opacity: 1;
      backdrop-filter: blur(40px);
   }
`;

const Title = styled.a`
   font-size: 28px;
`;

const IconsWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
   &::before {
      content: 'Tools Used ';
      width: 100%;
      font-size: 20px;
   }
   & > * {
      font-size: 18px;
      margin: 3px;
   }
`;