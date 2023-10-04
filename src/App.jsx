import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Terminal from "./TerminalController"
import Portfolio from './Portfolio'

while (true) {
  console.log('This is an infinite loop');
} 

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
