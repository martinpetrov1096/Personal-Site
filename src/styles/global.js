import styled from 'styled-components';


export const Section = styled.section`
   margin-bottom: 200px;
   padding-top: 80px;
   width: 95%;
   max-width: 1800px;
   color: ${(props) => props.theme.color};
   font-family: ${props => props.theme.fontPrimary};
   /* Hide the section if on the next page */
   transition: ${(props) => props.theme.transition};

   display: flex;
   flex-flow: column nowrap;
   align-items: center;

   @media screen and (max-width: 1000px) {
      margin-bottom: 100px;
   }
   @media screen and (max-width: 600px) {
      margin-bottom: 20px;
   }
`;

export const Title = styled.h1`
   font-family: ${(props) => props.theme.titleFont};
   font-weight: 400;
   font-size: min(20vw, 150px);
`;

export const Subtitle = styled.h2`
   margin: 30px 0;
   font-family: ${(props) => props.theme.subtitleFont};

   font-weight: 500;
   font-size: 22px;
   color: ${(props) => props.theme.color};
   transition: ${(props) => props.theme.transition}
`;

export const Paragraph = styled.p`
   max-width: 800px;
   font-size: ${(props => props.desktop || '16px;')};
   line-height: 1.3;
   margin-bottom: 20px;

   @media screen and (max-width: 1000px) {
      font-size:  ${(props => props.tablet || '14px;')}
   }
   @media screen and (max-width: 600px) {
      font-size:  ${(props => props.mobile || '10px;')}
      margin-bottom: 10px;
   }
`;

export const Button = styled.button`
   box-shadow: ${(props) => props.theme.boxShadowInsetAccent};
   border: none;
   border-radius: 5px;
   padding: 10px;
   background-color: ${(props) => props.theme.accentColor};
   color: white;
   font-family: ${(props) => props.theme.subtitleFont};
   font-size: 24px;
`;
