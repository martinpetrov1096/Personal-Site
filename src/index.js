import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Home from './sections/home';
import Resume from './sections/resume';
import Timeline from './sections/timeline';
import Skills from './sections/skills';
import Contact from './sections/contact';


const sections = [
    {
        'name': 'HOME', 
        'elem': Home
    },
    {
        'name': 'RESUME', 
        'elem': Resume
    },
    {
        'name': 'TIMELINE', 
        'elem': Timeline
    },
    {
        'name': 'SKILLS', 
        'elem': Skills
    },
    {
        'name': 'CONTACT', 
        'elem': Contact
    }
]



ReactDOM.render(
   <React.StrictMode>
     <App sectionProps={sections}/>
   </React.StrictMode>,
   document.getElementById('root')
 );