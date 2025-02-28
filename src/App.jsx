import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Portfolio from './Portfolio'

function App() {

  return (
    <div className="bg-background">
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
