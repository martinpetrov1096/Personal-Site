import React from 'react';
import styled from 'styled-components';


export default function Name() {
   return (
      <NameTitle>Mart<I>i</I>n Petrov</NameTitle>
   )
}

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const NameTitle = styled.h1`
   margin: 0;
   margin-top: 25vh !important;
   font-family: 'Playfair Display', serif;
   font-weight: 700;
   text-align: center;
   @media only screen and (min-width: 1801px) {
      font-size: 200px !important;
   }
   @media only screen and (min-width: 1301px) and (max-width: 1800px){
      font-size: 150px !important;
   }
   @media only screen and (min-width: 901px) and (max-width: 1300px){
      font-size: 120px !important;
   }
   @media only screen and (min-width: 601px) and (max-width: 900px){
      font-size: 80px !important;
   }
   @media only screen and (max-width: 600px){
      font-size: 70px !important;
   }
`;
const I = styled.span`
   color: ${props => props.theme.accentColor};
   &:before {
      content: "ı";
      position: absolute; 
      color: black;
      font-weight: 700;
   }
   color: ${props => props.theme.accentText}
`;

