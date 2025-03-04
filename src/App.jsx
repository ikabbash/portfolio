import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Portfolio from './Portfolio'
import NotFound from "./components/sub-components/NotFound";

function App() {

  return (
    <div className="bg-background">
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
