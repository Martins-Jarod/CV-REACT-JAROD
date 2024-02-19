
import './App.css';
import User from './components/User';
import Skills from './components/Skills';
import Interests from './components/Interests';
import FormationsExperiences from './components/FormationsExperiences';
import Objectif from './components/Objectif';
import ActionButton from './components/ActionButton';
import { Preview } from "react-html2pdf"



function App() {



  return (
    <Preview id={"cv-print"} class="cv-print">
      <div className="App">

        <div className="Sidebar">
          <ActionButton />
          <User />
          <Skills />
        </div>

        <div className="Main">
          <Objectif />
          <FormationsExperiences />
          <Interests />
        </div>

      </div>
    </Preview>
  );
}

export default App;
