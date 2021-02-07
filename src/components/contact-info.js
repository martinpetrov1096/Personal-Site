import styled from 'styled-components';
import contact from '../config/contact.json';

export const ContactInfo = () => {

   return (
      <ContactWrapper>
         <Contact>{contact['email']}</Contact>
         <Contact>{contact['phone']}</Contact>
         <Contact>{contact['location']}</Contact>
      </ContactWrapper>

   );

};


const ContactWrapper = styled.div`

   width: 100%;
   max-width: 1000px;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-around;
`;

const Contact = styled.h4`
   padding: 30px;
   font-size: 18px;
   font-family: ${(props) => props.theme.subtitleFont};
`;