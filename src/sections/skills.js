import { Skill } from '../components/skill';
import { Section, Title } from '../styles/global'; 
import skills from '../config/skills.json';
export const Skills = () => {

   return (
      <Section visible="dark" id="skills">
         <Title>Skills</Title>
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

