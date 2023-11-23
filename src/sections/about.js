import styled from 'styled-components';
import { Section, Title } from '../styles/global';
import about from '../config/about.json';


export default ({ curTab }) => {
   
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
                  <Tag>
                     I’m a recent Computer Science graduate from the University
                     of California, Davis. Over the past couple years I’ve kept 
                     myself busy by learning as many languages, frameworks, and 
                     libraries as I can.
                  </Tag>
                  <Tag>
                     I'm a very passionate and capable <em>Fullstack Software Engineer</em>
                  </Tag>
                  <Tag>
                     Keep scrolling to see some of my most recent projects,the 
                     tools I use, and my contact information
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
   align-items: flex-start;
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

const Tag = styled.p`
   padding-bottom: 50px;
   max-width: 900px;
   font-size: 22px;
   line-height: 1.5;
   > em {
      font-weight: 700;
      font-size: 28px;
      
   }
`;