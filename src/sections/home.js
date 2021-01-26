import styled from 'styled-components';

export default function Home() {

   return (
      <Section >
         <Name>Mart<span>i</span>n Petrov</Name>
      </Section>
   );
}

const Section = styled.section`
   height: 80vh;
   width: 100%;
   display: grid;
   grid-template-areas: 
      "padding-top"
      "name"
      "padding-bottom";
   grid-template-rows: 1fr 3fr 3fr;
   position: relative; /* Needs to be here so that the 'i' has something relative */
`;

const Name = styled.h1`
   font-family: 'Playfair Display', serif;
   font-size: 10vw;
   font-weight: 700;
   grid-area: name;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
   word-wrap: normal;

   & > span {
      font-weight: 700;
      color: ${(props) => props.theme.accentColor};

      &::before {
         content: "ı"; 
         color: black;
         position: absolute; 
      }
   }
`;