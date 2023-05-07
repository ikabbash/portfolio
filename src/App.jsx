import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Blogs from "./components/Blogs"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Mobile-footer"
import Experience from "./components/Experience"
import About from "./components/About"
function App() {

  return (
    <div className="bg-color">
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Experience />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
