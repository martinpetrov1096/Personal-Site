
import Home from './sections/home';
import Timeline from './sections/timeline';
import Skills from './sections/skills';
import Contact from './sections/contact';
import ReactFullpage from '@fullpage/react-fullpage';
import './styles/global.css';

function App() {
  return (
     <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */
   
      render={({ state, fullpageApi }) => {
         return (
            <main>
               
               <ReactFullpage.Wrapper>
                  
                  <Home></Home>
                  
                  <Timeline></Timeline>
                  <Skills></Skills>
                  <Contact></Contact>
               </ReactFullpage.Wrapper>
            </main>
               


         );
      }}
      />
      
    
  );
}

export default App;
