import styled from 'styled-components';
import { Section, Title, Subtitle } from '../styles/global';
import ContactInfo from '../components/contact-info';
import ContactForm from '../components/contact-form';


export default () => {

   return (
      <FullHeightSection $visible="light" id="contact">
         <Title>Contact</Title>
         <Subtitle>Shoot me an email, or give me a call.</Subtitle>
         <ContactInfo/>
         <Subtitle>Or, fill out the form below</Subtitle>
         <ContactForm/>
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