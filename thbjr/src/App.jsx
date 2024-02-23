
import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './Components/Navigation/Navigation'
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"

function App() {

  return (
    <>
      <Navigation/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Error" element={<Error/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
