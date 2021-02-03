import { useState } from 'react';
import styled from 'styled-components';

export const ContactLetter = () => {

   const [name, setName] = useState('Name');
   const [subject, setSubject] = useState('Subject');
   const [email, setEmail] = useState('Email Address');
   const [message, setMessage] = useState('Hi Martin, \n Enter your message here. . .');
   return (
      <Card>
         <Email value={email} onChange={(e) => setEmail(e.target.value)}/>
         <Subject value={subject} onChange={(e) => setSubject(e.target.value)}/>
         <Message value={message} onChange={(e) => setMessage(e.target.value)}/>
         <Name value={name} onChange={(e) => setName(e.target.value)}/>
      </Card>
   );
}

const Card = styled.div`
   flex: 1 1 50%;
   border-radius: 5px;
   box-shadow: ${(props) => props.theme.boxShadowSmall};
   padding: min(40px, 3%);
   margin-top: 150px;
   width: min(95%, 1000px);
   min-height: 500px;

   display: flex;
   flex-flow: column nowrap;

`;

const ContactInput = styled.input.attrs({
   type: 'text',
})`
   display: block;
   border: none;
   width: 100%;
   background-color: inherit;
   font-size: 30px;
   font-weight: bold;
   font-family: 'Indie Flower', cursive;
   text-decoration: underline;
   &:focus {
      outline: none;
   }
`;



const Email = styled(ContactInput)`
   font-size: 30px;

`;

const Subject = styled(ContactInput)`

`;

const Name = styled(ContactInput)`
   text-align: right   

`;

const Message = styled.textarea`
   flex: 1 1 80%;
   align-self: center;
   width: 100%;
   background-color: inherit;
   border: none;
   font-size: 25px;
   font-family: 'Indie Flower', cursive;
   &:focus {
      outline: none;
   }
`;