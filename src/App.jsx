import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Blogs from "./components/Blogs"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Mobile-footer"
function App() {

  return (
    <div className="bg-color">
      <Navbar />
      <Hero />
      <Blogs />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
