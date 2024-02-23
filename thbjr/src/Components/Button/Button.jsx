/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({ text }) => {
  return (
    <button className="btn">{text}</button>
  )
}

export default Button
