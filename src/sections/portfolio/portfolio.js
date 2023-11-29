import styled from "styled-components";
import { Section } from "../../styles/global";
import PortfolioHeader from "./header";
import portfolio from '../../config/portfolio.json';
import Timeline from './timeline';


const Portfolio = ({ curTab }) => {
  return (
    <Section id="portfolio">
         {portfolio.map(p =>  (
            <PortfolioWrapper key={p.key}>
               <PortfolioHeader title={p.title} subtitle={p.subtitle} description={p.description} tools={p.tools}/>

               <Timeline timelineItems={p.timelineItems}/>
            </PortfolioWrapper>
         ))}
    </Section>
  );
};
export default Portfolio
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const PortfolioWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
