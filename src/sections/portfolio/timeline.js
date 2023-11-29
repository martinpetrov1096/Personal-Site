import styled from 'styled-components';
import { Paragraph } from '../../styles/global';


const Timeline = ({timelineItems}) => {

    return (
        <Wrapper>
            <TimelineLine />
                <TimelineItemsWrapper>
                    {timelineItems.map(t => (
                            <TimelineItemWrapper key={t.key}>
                                <TextWrapper>
                                    <Title>{t.title}</Title>
                                    {t.description.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)} 
                                </TextWrapper>
                                <ImageWrapper>
                                    <Image src={t.image}/>
                                </ImageWrapper>
                            </TimelineItemWrapper>
                    ))}
            </TimelineItemsWrapper>
        </Wrapper>
    );
}
export default Timeline;

///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 200px 0;
`;
const TimelineLine = styled.div`
    flex: 0 0 5px;
    width: 5px;
    margin-right: 50px;
    border-radius: 5px;

    background-color: black;
    &::before {
        content: 'Timeline';
        font-size: 30px;
        transform: rotate(-90deg) translateX(100px) translateY(-60px);
        display: inline-block;
    }

    @media screen and (max-width: 600px) {
      display: none;
      margin: 0;
   }
`;

const TimelineItemsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;

`;


const TimelineItemWrapper = styled.div`
    margin: 125px 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1000px) {
      flex-flow: column-reverse nowrap;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 600px) {
        margin: 0px 0;
    }    
`;
const TextWrapper = styled.div`
    flex: 1 1 500px;
    max-width: 700px;
    margin-right: 100px;

    @media screen and (max-width: 1000px) {
        flex: 1 1 auto;
        margin-right: 0;
   }
`;
const Title = styled.h2`
    padding-bottom: 40px;
    font-size: min(12vw, 150px);
    font-weight: bold;

    @media screen and (max-width: 1000px) {
        text-align: center;
   }
`;
const ImageWrapper = styled.div`
    flex: 1 1 300px;
    border-radius: 5px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    @media screen and (max-width: 1000px) {
        max-width: 400px;
   }
`;