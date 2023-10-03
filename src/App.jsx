import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Terminal from "./TerminalController"
import Portfolio from './Portfolio'
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si"; 
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";

function App() {

  return (
    <div className="bg-background">
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />}/>
          <Route path='/test' element={<Terminal />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
