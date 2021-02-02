import styled from 'styled-components';

export default function StickyNote({tilt, text, subText}) {

   return(
      <Wrapper>
         <h2>{text}</h2>
         <h6>{subText}</h6>
      </Wrapper>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
   margin-top: 100px;
   border-radius: 5px;
   height: 200px;
   width: min(300px, 80%);
   background: #FFFFCB;
   font-family: 'Indie Flower', cursive;
   box-shadow: ${(props) => props.theme.boxShadowSmall};

   transform: rotate(10deg);

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   transition: ${(props) => props.theme.transition};

   > h2 {
      font-size: 24px;
   }
   > h6 {
      font-size: 14px;
   }
`;