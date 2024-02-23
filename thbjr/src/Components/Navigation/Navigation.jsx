/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 
//Add useMatch & useResolvedPath to above line
//Add these when you've added active styles to your nav li in styles
import Button from "../Button/Button"
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">thbjr</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
      <Button text={"Contact"}/>
    </div>
  )
}

export default Navigation

function CustomLink ({ to, children }) {

  const path = window.location.pathname
  // Once you have added active styles to links remove the code above and use the code below
  // const resolvedPath = useResolvedPath(to)
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    //replace path with isActive once active styles have beem added
    <li className={ path === to ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}