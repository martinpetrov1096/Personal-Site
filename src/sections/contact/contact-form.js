import { useState, useCallback, useContext } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import emailConfig from "../../config/email.json";
import { Subtitle } from "../../styles/global";
import { SectionContext } from "../../App";
import { IoMdSend } from "react-icons/io";



const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  let sections = useContext(SectionContext);

  const sendEmail = useCallback((e) => {
    setSent(true);
    e.preventDefault();
    emailjs
      .sendForm(
        emailConfig["serviceId"],
        emailConfig["templateId"],
        e.target,
        emailConfig["userId"]
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
  }, []);

  if (!sent) {
    return (
      <Card onSubmit={sendEmail} $sent={sent} $animate={sections.find(s => s.active === true)?.name === 'CONTACT'}>
        <Email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={(e) => e.target.select()}
        />
        <Subject
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onClick={(e) => e.target.select()}
        />
        <Name
          value={name}
          onChange={(e) => setName(e.target.value)}
          onClick={(e) => e.target.select()}
        />
        <Message
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={(e) => e.target.select()}
        />
        <Send>
        Send 
        </Send>

      </Card>
    );
  } else {
    return <Subtitle>I'll make sure to respond to you soon</Subtitle>;
  }
};
export default ContactForm;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Card = styled.form`
  flex: 1 1 50%;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadowSmall};
  padding: min(40px, 3%);
  margin-top: 50px;
  width: min(95%, 1000px);
  min-height: 500px;

  /* transition: all 1s ease-in-out !important;
  transition-delay: 1s;
  transform: ${(props) => props.$animate 
      ? `translate3d(0,0,0) rotate(0)` 
      : `translate3d(0, 60vh, 0)`}; */

  display: flex;
  flex-flow: column nowrap;
`;

const ContactInput = styled.input.attrs({
  type: "text",
  required: true,
})`
  display: block;
  border: none;
  width: 100%;
  background-color: inherit;
  font-size: 30px;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  text-decoration: underline;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const Email = styled(ContactInput).attrs({
  type: "email",
  name: "email",
  placeholder: "Email Address",
})`
`;

const Subject = styled(ContactInput).attrs({
  type: "text",
  name: "subject",
  placeholder: "Subject",
})``;

const Name = styled(ContactInput).attrs({
  name: "name",
  placeholder: "Name",
})``;

const Message = styled.textarea.attrs({
  name: "message",
  placeholder: "Enter your message here. . .",
})`
  flex: 1 1 80%;
  align-self: center;
  width: 100%;
  resize: none;
  background-color: inherit;
  border: none;
  font-family: "Indie Flower", cursive;
  &:focus {
    outline: none;
  }
`;

const Send = styled.button.attrs({
  type: "submit",
  value: "Send",
})`
  align-self: flex-end;
  border: none;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.accentColor};
  padding: 10px;
  color: ${props => props.theme.accentColor};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  background: none;


  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: white;
  }
`;
