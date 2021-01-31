import styled from "styled-components";

export const ProjectCard = ({project}) => {
   
   return (
      <Project key={project.name} size={project.size}>
         <BrowserWindow>
            <BrowserButton/>
            <BrowserButton/>
            <BrowserButton/>
         </BrowserWindow>
         <Content fontColor={project.fontColor}>
            <h3>{project.name}</h3>
            <h5>{project.description}</h5>

         </Content>
         <BG imageUrl={project.imageUrl}/>
      </Project>
   );
}

const Project = styled.div` 
   border-radius: 3px;
   transition: ${(props) => props.theme.transform} transform .25s ease-in-out;
   position: relative;
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-around;
   align-items: center;
`;

const BrowserWindow = styled.div`
   width: 100%;
   height: 30px;
   background-color: ${(props) => props.theme.contentBgColor};
   display: flex;
   align-items: center;
   justify-content: flex-end;   
`;

const BrowserButton = styled.div`
   height: 10px;
   width: 10px;
   border-radius: 50%;
   margin-right: 5px;

   &:nth-of-type(1) {
      background-color: #28ca41;
   }
   &:nth-of-type(2) {
      background-color: #ffbd2e;
   }
   &:nth-of-type(3) {
      background-color: #ff5f57 ;
   }
`;

const BG = styled.div`
   width: 100%;
   height: 100%;
   background: url(${(props) => props.imageUrl});
   background-position: center;
   background-size: cover;
`;

const Content = styled.div`
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;  

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   & > * {
      font-family: 'Varela', sans-serif;
      color: ${(props) => props.fontColor};
   }
   & > h3 {
      font-size: 28px;
   }
   & > h5 {
      font-size: 14px;
   }

   transition: backdrop-filter .2s ease-in, opacity .2s ease-in;
   &:hover {
      opacity: 1;
      backdrop-filter: blur(40px);
   }

`;
