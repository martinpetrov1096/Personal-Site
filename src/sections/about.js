import styled from 'styled-components';
import { Section, Title } from '../styles/global';
import about from '../config/about.json';

export const About = () => {
   
   return (
      <Section visible="light">
         <AboutWrapper >
               <ProfileWrapper>
                  <ProfilePicture src={about['profileUrl']}/>
                  <ProfileLinks>
                     <i className="devicon-linkedin-plain"/>
                     <i className="devicon-github-plain"/>
                  </ProfileLinks>
               </ProfileWrapper>
               <TextWrapper>
                  <Greeting> Hi, I'm Martin</Greeting>
                  <Tag>
                  I’m a recent Computer Science graduate from the University
                  of California, Davis. Over the past couple years I’ve kept 
                  myself busy by learning as many languages, frameworks, and 
                  libraries as I can.
                  </Tag>
               </TextWrapper>
         </AboutWrapper>
      </Section>

   );

}




const AboutWrapper = styled.div`
   width: 100%;

   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: flex-start;
`;

const ProfileWrapper = styled.div`
   flex: 0 1 400px;
   margin-right: 30px;

   display: flex;
   flex-flow: column nowrap;

`;

const TextWrapper = styled.div`
   flex: 0 1 1000px;
   font-family: ${(props) => props.theme.paragraphFont};

   display: flex;
   flex-flow: column nowrap;
   align-items: flex-start;
`;

const ProfilePicture = styled.img`
   border-radius: 50%;
   width: 100%;
   height: auto;
   
`;

const ProfileLinks = styled.div`
   padding: 30px;
   flex: 0 0 100%;

   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;
   align-content: center;
   & > i {

      flex: 0 0 100px;
      font-size: 60px; 
      text-align: center;
      transition: color .2s ease-in-out;
      &:hover {

         color: ${(props) => props.theme.accentColor};
      }
   }
`;



const Greeting = styled(Title)`
   text-align: center;
   font-weight: 400;
   padding-bottom: 20px;
`;

const Tag = styled.p`
   max-width: 900px;
   text-align: center;
   font-size: 22px;
   line-height: 1.5;
`;