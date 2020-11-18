import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import App from './App';
import Navigation from './components/navbar';
ReactDOM.render(
   <React.StrictMode>
      <Navigation></Navigation>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 );