import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Portfolio from './Portfolio'
import NotFound from "./components/sub-components/NotFound";

function App() {

  console.log(
    "%c01010110 00110100 01001100 01000100 01010101 01010011",
    "color: #b52626;"
  );


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
