import styled from "styled-components";


export const ProjectCard = ({name, imgUrl, size, fontColor}) => {
   return (
      <Project key={name} size={size} imgUrl={imgUrl}>
         {/* {imgUrl ? <ProjectImage src={'project-images/'+imgUrl}/> : void(0) } */}
         <ProjectContentWrapper fontColor={fontColor}>
            <ProjectTitle>{name}</ProjectTitle>

         </ProjectContentWrapper>
      </Project>
   );

}


// const Project = styled.div`

//    box-shadow: ${(props) => props.theme.boxShadowSmall};   
//    border-radius: 3px;
//    padding: 20px;
//    background-color: ${(props) => props.theme.contentBgColor};


//    transition: ${(props) => props.theme.transform} transform .25s ease-in-out;



//    display: flex;
//    flex-flow: ${(props) => props.size === 'tall' ? `column` : `row` } nowrap;
//    justify-content: center;
//    align-items: center;

  

//    :hover {
//       z-index: 2;
//       transform: scale(1.05);
//    }

//    @media screen and (min-width: 1020px) {
//       grid-column: ${(props) => props.size === 'wide' ? 'span 2 / auto' : 'auto'};
//       grid-row: ${(props) => props.size === 'tall' ? 'span 2 / auto': 'auto'};
//    }

// `;

// const ProjectImage = styled.img`

//    flex: 50% 0 1;
//    border-radius: 5px;
//    width: 100%;
//    height: 50%;

//    > * {
//       content: '';
//       position: relative;
//       width: 100%;
//       height: 100%;
//       filter: blur(40px);
//    }
// `;

// const ProjectContentWrapper = styled.div`
//    flex: 50% 1 1;

//    width: 100%;
//    height: 100%;
//    backdrop-filter: blur(0px);
//    color: ${(props) => props.theme.color};



// `;

// const ProjectTitle = styled.h2`

//    font-family: ${(props) => props.theme.subtitleFont};
//    font-size: 300%;

// `;


const Project = styled.div`

   box-shadow: ${(props) => props.theme.boxShadowSmall};   
   border-radius: 3px;
   /* Add the background color as well as a gradient to make the images seem more cohesive to the theme */
   background: ${(props) => props.imgUrl ? `linear-gradient(${props.theme.accentColor}00, ${props.theme.accentColor}00),
       url(${process.env.PUBLIC_URL}/project-images/${props.imgUrl})` : props.theme.contentBgColor};

   background-size: cover;
   background-position: center;


   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   transition: ${(props) => props.theme.transform} transform .25s ease-in-out;

   :hover {
      z-index: 2;
      transform: scale(1.05);
   }

   @media screen and (min-width: 1020px) {
      grid-column: ${(props) => props.size === 'wide' ? 'span 2 / auto' : 'auto'};
      grid-row: ${(props) => props.size === 'tall' ? 'span 2 / auto': 'auto'};

   
   }

`;

const ProjectContentWrapper = styled.div`
   width: 100%;
   height: 100%;
   backdrop-filter: blur(0px);
   color: ${(props) => props.fontColor};


   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   > * {
      opacity: 1;
      transition: all .3s ease-in-out;
   }

   &:hover {
      backdrop-filter: blur(40px);

      > * {
         opacity: 0;
      }
   }


`;

const ProjectTitle = styled.h2`

   font-family: ${(props) => props.theme.subtitleFont};
   font-size: 300%;

`;
