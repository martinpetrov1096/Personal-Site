import styled from 'styled-components';


const BrowserImage = ({image}) => {
   
   return (
      <Project>
         <BrowserWindow>
            <BrowserButton/>
            <BrowserButton/>
            <BrowserButton/>
         </BrowserWindow>
         <BG src={image}/>
      </Project>
   );
}
export default BrowserImage;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Project = styled.div` 
   margin: max(1%, 20px) 1%;
   border-radius: 10px;
   flex: 480px 0 1;
   transition: ${(props) => props.theme.transform} transform .25s ease-in-out;
   position: relative;
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
`;

const BrowserWindow = styled.div`
   border-radius: 5px 5px 0 0;
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
   /* Make the window buttons */
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

const BG = styled.img`
   width: 100%;
   border-radius: 0 0 5px 5px;
`;
