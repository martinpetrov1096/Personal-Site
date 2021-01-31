import styled from "styled-components";
import projects from '../config/projects.json';
import { ProjectCard } from '../components/project-card';

export const Portfolio = () => {

   return (
      <Section>
         <Title>Portfolio</Title>
         <ProjectsWrapper>
            {
               projects.map((p) => {
               return (
                 <ProjectCard key={p.name} project={p}/>
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
   max-width: 1800px;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
`;

