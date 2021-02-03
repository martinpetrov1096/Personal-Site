import styled from "styled-components";
import projects from '../config/projects.json';
import { ProjectCard } from '../components/project-card';
import { Section, Title } from '../styles/global';

export const Portfolio = ({ curTab }) => {

   return (
      <Section visible="dark" id="portfolio"> 
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

const ProjectsWrapper = styled.div`
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
`;

