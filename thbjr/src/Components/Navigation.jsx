/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 

const Navigation = () => {
  return (
    <div>
      <Link to="/">thbjr</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>    
    </div>
  )
}

export default Navigation

function CustomLink ({ to, children }) {
  const path = window.location.pathname
  return (
    <li className={ path === to ? "active" : ""}>
      <a href="">{children}</a>
    </li>
  )
}