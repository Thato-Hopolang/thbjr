/* eslint-disable react/prop-types */
import "./Footer.css"
import Copyright from "../Icons/Copyright.png"

const Footer = () => {
  return (
    <div className="footer">
      <FooterContent src={Copyright} text={"thbjr"} alt={"copyright icon"}/>
    </div>
  )
}

export default Footer

function FooterContent({ src, text, alt }) {
  return (
    <div className="footercontent">
      <img src={src} alt={alt}/> <h6>{text}</h6>
    </div>
  )
}