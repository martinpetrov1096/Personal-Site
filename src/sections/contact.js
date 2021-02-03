import styled from 'styled-components';
import { Section, Title, Subtitle } from '../styles/global';
import { ContactInfo } from '../components/contact-info';
// import { ContactLetter } from '../components/contact-letter';
export const Contact = () => {

   return (
      <FullHeightSection visible="light">
         <Title>Contact</Title>
         <Subtitle>Shoot me an email, or give me a call. </Subtitle>
         <ContactInfo/>
         {/* <ContactLetter/> */}
      </FullHeightSection>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const FullHeightSection = styled(Section)`
   /**
    * Need to set height to be 100vh
    * just to make sure that the page
    * can scroll all the way to change
    * themes and make the contact 
    * section visible
    */
   min-height: calc(100vh - 70px);
   margin-bottom: 0;

`;