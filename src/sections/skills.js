import styled from "styled-components";

import { Skill } from '../components/skill';
import { Section, Subtitle, Title } from '../styles/global'; 
import skills from '../config/skills.json';
export const Skills = () => {


   return (
      <Section visible="dark">
         <Title>Skills</Title>
         <Subtitle>
            Here's some of the languages and Frameworks that I've used in the past.
            They're ordered in decreasing familiarity
         </Subtitle>
         <Skill title="Languages" skills={skills['languages']}/>
         <Skill title="Front End" skills={skills['frontend']}/>
         <Skill title="Back End" skills={skills['backend']}/>
         <Skill title="Dev Ops" skills={skills['dev-ops']}/>
      </Section>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

