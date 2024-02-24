/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ErrorInfo.css"

const ErrorInfo = ({ errornumber }) => {
  return (
    <div className="errorinfo">
      <h3>{errornumber}</h3>
      <p>Wrong, something has gone.</p>
      <div className="options-holder">
        <LinkedBtn className={"btn-border"} to={"/"} btntext={"Try Again"}/>
        <LinkedBtn className={"btn-bg"} to={"/"} btntext={"Back Home"}/>
      </div>
    </div>
  )
}

export default ErrorInfo

function LinkedBtn({ className, to, btntext }) {
  return (
    <Link className={className} to={to}>{btntext}</Link>
  )
}