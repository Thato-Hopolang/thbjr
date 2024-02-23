/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ErrorInfo.css"

const ErrorInfo = ({ errornumber }) => {
  return (
    <div className="errorinfo">
      <h3>{errornumber}</h3>
      <p>Wrong, something has gone.</p>
      <div className="options-holder">
        <LinkedBtn to={"/"} btntext={"Try Again"}/>
        <LinkedBtn to={"/"} btntext={"Back Home"}/>
      </div>
    </div>
  )
}

export default ErrorInfo

function LinkedBtn({ to, btntext }) {
  return (
    <Link to={to}>{btntext}</Link>
  )
}