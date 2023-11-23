import { useState, useCallback } from 'react';
import emailjs from "@emailjs/browser";
import styled from 'styled-components';
import emailConfig from '../config/email.json';
import { Subtitle } from '../styles/global';

const ContactForm = () => {

   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [sent, setSent] = useState(false);

   const sendEmail = useCallback((e) => {
      setSent(true);
      e.preventDefault();
      emailjs.sendForm(emailConfig['serviceId'], emailConfig['templateId'], e.target, emailConfig['userId'])
         .then((res) => {
            console.log(res.text);

         }, (err) => {
            console.log(err.text);
         });
   }, []);

   if (!sent) {
      return (
         <Card onSubmit={sendEmail} $sent={sent}>
            <Email value={email} onChange={(e) => setEmail(e.target.value)} onClick={(e) => e.target.select()}/>
            <Subject value={subject} onChange={(e) => setSubject(e.target.value)} onClick={(e) => e.target.select()}/>
            <Name value={name} onChange={(e) => setName(e.target.value)} onClick={(e) => e.target.select()}/>
            <Message value={message} onChange={(e) => setMessage(e.target.value)} onClick={(e) => e.target.select()}/>
            <Send/>
         </Card>
      );
   } else {
      return (
         <Subtitle>
            I'll make sure to respond to you soon
         </Subtitle>
      );
   }
}
export default ContactForm;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Card = styled.form`
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
   required: true
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



const Email = styled(ContactInput).attrs({
   type: 'email',
   name: 'email',
   placeholder: 'Email Address'
})`
   font-size: 30px;
`;

const Subject = styled(ContactInput).attrs({
   type: 'text',
   name: 'subject',
   placeholder: 'Subject'
})`
`;

const Name = styled(ContactInput).attrs({
   name: 'name',
   placeholder: 'Name'
})`
`;

const Message = styled.textarea.attrs({
   name: 'message',
   placeholder: 'Enter your message here. . .'
})`
   
   flex: 1 1 80%;
   align-self: center;
   width: 100%;
   resize: none;
   background-color: inherit;
   border: none;
   font-size: 25px;
   font-family: 'Indie Flower', cursive;
   &:focus {
      outline: none;
   }
`;

const Send = styled.input.attrs({
   type: 'submit',
   value: 'Send'
})`
   align-self: flex-end;
   box-shadow: ${(props) => props.theme.boxShadowInset};
   border: none;
   border-radius: 5px;
   padding: 10px;
   font-family: ${(props) => props.theme.subtitleFont};
   font-size: 24px;
   transition: all .2s ease-in-out;
   &:hover {
      background-color: ${(props) => props.theme.accentColor};

      box-shadow: ${(props) => props.theme.boxShadowInsetAccent};
      color: white;
   }
`;
