import styled from "styled-components";
import { Section, Title, Subtitle } from "../../styles/global";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

const Contact = () => {




  return (
    <FullHeightSection id="contact">
      <Title>Contact</Title>
      <Subtitle>
        Shoot me an email, or give me a call. Or, fill out the form below
      </Subtitle>
      <ContactInfo />
      <ContactForm />
    </FullHeightSection>
  );
};
export default Contact;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const FullHeightSection = styled(Section)`
  margin-bottom: 0;
`;
