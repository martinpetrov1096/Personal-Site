import styled from 'styled-components';
import { Section, Title, Paragraph } from '../styles/global';
import about from '../config/about.json';


const About = ({ curTab }) => {
   
   return (
      <Section $visible="light" id="about">
         <AboutWrapper>
               <ProfileWrapper>
                  <ProfilePicture src={about['profileUrl']} alt="Martin Petrov's Profile"/>
                  <ProfileLinkWrapper>
                     <ProfileLink href={about.linkedInUrl} target="_blank" rel="noopener noreferrer">
                        <i className="devicon-linkedin-plain" />
                     </ProfileLink>
                     <ProfileLink href={about.githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="devicon-github-plain" />
                     </ProfileLink>
                  </ProfileLinkWrapper>
               </ProfileWrapper>
               <TextWrapper>
                  <Greeting> Hi, I'm Martin</Greeting>
                  <Tag $desktop="20px" $tablet="16px" $mobile="14px">
                  I graduated from UC Davis in Fall 2020. Since then I've been working as a
                   <em> Fullstack Software Engineer</em>. Despite working full time, I still love working on projects and
                  learning new skills in my spare time. If I’m not coding you can find me weightlifting, working on my
                  cars, or watching movies.
                  </Tag>
                  <Tag $desktop="20px" $tablet="16px" $mobile="14px">
                  Keep scrolling to learn a little bit about my most recent projects and my contact information. 
                  </Tag>
               </TextWrapper>
         </AboutWrapper>
      </Section>

   );

}
export default About;



const AboutWrapper = styled.div`
   width: 100%;

   display: flex;
   flex-flow: row wrap;
   justify-content: space-around;
   align-items: flex-start;
`;

const ProfileWrapper = styled.div`
   flex: 0 1 400px;
   display: flex;
   flex-flow: column nowrap;
`;

const TextWrapper = styled.div`
   flex: 0 1 1000px;
   font-family: ${(props) => props.theme.paragraphFont};

   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`;

const ProfilePicture = styled.img`
   border-radius: 50%;
   width: 100%;
   height: auto;
`;



const ProfileLinkWrapper = styled.div`
   padding: 30px;
   flex: 0 0 100%;

   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
`;

const ProfileLink = styled.a`
   padding: 10px;
   color: ${(props) => props.theme.color};
   text-decoration: none;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;

   & > i {
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

const Tag = styled(Paragraph)`
   padding-bottom: 50px;
   > em {
      font-weight: 700;
      font-size: 22px;
      display: inline-block;
      @media screen and (max-width: 600px) {
         font-size: 20px;
      }
   }
`;