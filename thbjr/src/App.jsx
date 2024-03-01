
import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './Components/Navigation/Navigation'
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="page">
      <Navigation/>
      <div className="body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
