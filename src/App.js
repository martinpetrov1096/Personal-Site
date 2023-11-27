import "./styles/reset.css";
import "./styles/root.css";

import React, { useEffect, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/navbar";
import Home from "./sections/home";
import Resume from "./sections/resume";
import Portfolo from "./sections/portfolio/portfolio";
import About from "./sections/about";
import theme from "./config/theme.json";
import Contact from "./sections/contact/contact";

export const ScrollContext = React.createContext();
export const SectionContext = React.createContext();
export const WindowDimensionContext = React.createContext();

const sectionsConfig = [
  { name: "HOME", elem: Home },
  { name: "RESUME", elem: Resume },
  { name: "ABOUT", elem: About },
  { name: "PORTFOLIO", elem: Portfolo },
  { name: "CONTACT", elem: Contact },
];

export default function App() {
  /**
   * @scroll represents the scroll position in pixels from the top. After
   * 100ms, set recent to false on the scroll
   */
  const [scroll, setScroll] = useState({ value: 0, recent: false });
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0,
  });
  /**
   * Add an event listener to listen to the current scroll position as well as
   * the window dimensions
   */
  useEffect(() => {
    const onScroll = (e) => {
      setScroll({ value: window.scrollY / window.innerHeight, recent: true });
      setTimeout(
        () => setScroll((prevState) => ({ ...prevState, recent: false })),
        1000
      );
    };
    window.addEventListener("scroll", onScroll);

    const onResize = (e) => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", onResize);

    // trigger event to initialize windowDimensions on page load
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const sections = useMemo(() => {
    const mySections = JSON.parse(JSON.stringify(sectionsConfig));
    const sectionElems = Array.from(
      document.getElementsByTagName("section")
    ).map((s) => s.getBoundingClientRect().bottom);



    // Set the active section once it's past halfway of the screen
    for (const [i, v] of sectionElems.entries()) {
      if (v >= windowDimensions.height / 2) {
        mySections[i].active = true;
        break;
      } else {
        mySections[i].active = false;
      }
    }


    return mySections;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll.value, windowDimensions.height]);

  return (
    <ThemeProvider theme={theme}>
      <WindowDimensionContext.Provider value={windowDimensions}>
        <ScrollContext.Provider value={scroll}>
          <SectionContext.Provider value={sections}>
            <NavBar scroll={scroll} />
            <Main>
              {sectionsConfig.map((s) => (
                <s.elem key={s.name} id={s.name.toLowerCase()} />
              ))}
            </Main>
          </SectionContext.Provider>
        </ScrollContext.Provider>
      </WindowDimensionContext.Provider>
    </ThemeProvider>
  );
}
///////////////////////////////////////////////////////////////////
///////////////////////////// CSS /////////////////////////////////
///////////////////////////////////////////////////////////////////

const Main = styled.main`
  background: ${(props) => props.theme.bgColor};
  transition: ${(props) => props.theme.transition};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
