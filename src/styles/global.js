import styled from 'styled-components';



/**
 * @visible Takes a parameter that says 
 * what the theme is. Is used to know if
 * the element should be visible or not
 */
export const Section = styled.section`
   margin-bottom: 200px;
   padding-top: 80px;
   width: 95%;
   max-width: 1800px;
   color: ${(props) => props.theme.color};

   /* Hide the section if on the next page */
   opacity: ${(props) => props.theme.name === props.visible ? '1' : '0'};
   transition: ${(props) => props.theme.transition};
   transform: ${(props) => props.theme.name === props.visible ? 'translateX(0)' : 'translateX(150px)'};

   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`;

export const Title = styled.h1`
   font-family: ${(props) => props.theme.titleFont};
   font-weight: 400;
   font-size: min(20vw, 150px);
`;

export const Subtitle = styled.h2`
   margin-bottom: 30px;
   font-family: ${(props) => props.theme.subtitleFont};

   font-weight: 500;
   font-size: 20px;
   color: ${(props) => props.theme.color};
`;


