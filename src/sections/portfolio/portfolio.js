import styled from "styled-components";
import { Section } from "../../styles/global";
import PortfolioHeader from "./header";
import portfolio from '../../config/portfolio.json';
import Timeline from './timeline';
import SmallProject from "./smallProject";

const Portfolio = () => {



  return (
    <Section id="portfolio">
         {portfolio.filter(p => p.timelineItems).map(p =>  (
            <PortfolioWrapper key={p.key}>
               <PortfolioHeader title={p.title} subtitle={p.subtitle} description={p.description} tools={p.tools} projectUrl={p.projectUrl}/>

               <Timeline timelineItems={p.timelineItems}/>
            </PortfolioWrapper>
         ))}
         {portfolio.filter(p => !p.timelineItems).map(p => <SmallProject title={p.title} image={p.image} description={p.description} />)}
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
