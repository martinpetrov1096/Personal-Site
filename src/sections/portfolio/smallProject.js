import styled from "styled-components";
import { Paragraph,  } from "../../styles/global";



const SmallProject = ({title, description, image}) => {  
    return (
   
            <ProjectWrapper>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </TextWrapper>
                <ImageWrapper>
                    <Img src={image}/>
                </ImageWrapper>
            </ProjectWrapper>


    );
}
export default SmallProject;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////
const ProjectWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 30px 0;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: space-between;

    @media screen and (max-width: 1000px) {
      flex-flow: column-reverse nowrap;
      justify-content: center;
      align-items: center;
    }
`;
const TextWrapper = styled.div`
   flex: 1 1 500px;
`;
const Title = styled.h4`
    padding-bottom: 40px;
    font-size: min(12vw, 50px);
    font-family: ${props => props.theme.fontSecondary};

    @media screen and (max-width: 1000px) {
        text-align: center;
   }
`;
const Description = styled(Paragraph)`
    font-family: 'Roboto', sans-serif;
    max-width: 650px;
`;
const ImageWrapper = styled.div`
    flex: 1 1 300px;
    border-radius: 5px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 100%;
    border-radius: 3px;
    @media screen and (max-width: 1000px) {
        max-width: 400px;
   }
`;