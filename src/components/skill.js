import { useMemo } from 'react';
import styled from 'styled-components';


const Skill = ({title, skills}) => {

   const icons = useMemo(() => {
      return skills.map((s) => {
         /* Since the name for express is different */
         if (s === 'express') {
            return (
               <SkillIcon key={s}>
                  <i className={`devicon-express-original colored`}/>
                  <h6>{s}</h6>
               </SkillIcon>
               );
         }
         return(
            <SkillIcon key={s}>
               <i className={`devicon-${s}-plain colored`}/>
               <h6>{s}</h6>
            </SkillIcon>
      )});
   }, [skills]);

   return (
      <SkillSection $visible="dark">
         <SkillTitle>{title}</SkillTitle>
         {icons}
      </SkillSection>
   );
}
export default Skill;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const SkillSection = styled.div`
   margin: 40px;
   border-radius: 10px;
   padding: 40px;
   width: calc(100% - 160px);
   background-color: ${(props) => props.theme.contentBgColor};

   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
`;

const SkillTitle = styled.h2`
   margin-bottom: 20px;
   padding-bottom: 10px;
   border-bottom: solid 1px grey;
   flex: 100% 1 0;
   font-size: 30px;
   font-family: ${(props) => props.theme.titleFont};
`;

const SkillIcon = styled.div`
   margin: 10px;
   flex: 90px 1 0;

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   > i {
      font-size: 90px;
      margin-bottom: 10px;
   }
   > h6 {
      font-family: ${(props) => props.theme.subtitleFont};
      font-size: 14px;
      text-transform: capitalize;
   }


`;