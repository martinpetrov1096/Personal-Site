


import Name from '../components/name';
import Resume from '../components/resume';

import '../styles/home.css';

export default function Home(props) {

  

   return (
      <main className="section">
         <Name></Name>
         <Resume className="resume" ></Resume>
      </main>

   )
}