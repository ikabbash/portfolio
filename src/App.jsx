import Navbar from "./components/Navbar"
import Blogs from "./components/Blogs"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Mobile-footer"
function App() {

  return (
    <>
      <Navbar />
      <Blogs />
      <Sidebar />
      <Footer />
      <div className="mb-32"></div>
    </>
  )
}

export default App
