import styled from 'styled-components';

export default function StickyNote({tilt, text, subText}) {

   return(
      <Wrapper style={{transform: `rotate(${tilt}deg)`}} >
         <h2>{text}</h2>
         <h6 style={{margin: '10px'}}>{subText}</h6>
      </Wrapper>
   );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
   border-radius: 5px;
   height: min(400px, 80%);
   width: min(500px, 80%);
   background: #FFFFCB;
   font-family: 'Indie Flower', cursive;
   box-shadow: ${(props) => props.theme.boxShadowSmall};

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   > h2 {
      font-size: 150%;
   }
`;