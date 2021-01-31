import styled from "styled-components";
import projects from '../config/projects.json';
import { ProjectCard } from '../components/project-card';

export const Projects = () => {

   return (
      <Section>
         <Title>Projects</Title>
         <ProjectsWrapper>
            {
               projects.map((p) => {
               return (
                 <ProjectCard project={p}/>
               );
               })
            }
         </ProjectsWrapper>
      </Section>
   );

}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Section = styled.section`
   width: 100%;
   max-width: 1200px;
   display: flex;
   flex-flow: column nowrap;
   align-items: center;

   /* Hide the section if on the next page */
   opacity: ${(props) => props.theme.name === 'dark' ? '1' : '0'};
   transition: ${(props) => props.theme.transition};

`;

const Title = styled.h2`
   margin-bottom: 30px;
   font-family: 'Varela', sans-serif;
   font-weight: 700;
   font-size: min(8vw, 150px);
   color: ${(props) => props.theme.color};

   transition: ${(props) => props.theme.transition};
`;

const ProjectsWrapper = styled.div`
   width: 95%;
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
   grid-auto-flow: row dense;

   @media screen and (min-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
      grid-auto-rows: 360px;


   
   }
`;

