/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./Porfolios.css"
import GitHub from "../Icons/GitHub.png"
import LinkedIn from "../Icons/LinkedIn.png"
import Behance from "../Icons/Behance.png"

const Porfolios = () => {
  return (
    <div className="portfolios-holder">
      <div className="portfolios">
        <Icons to={""} src={GitHub} alt={"Github icon"}/>
        <Icons to={""} src={LinkedIn} alt={"LinkedIn icon"}/>
        <Icons to={""} src={Behance} alt={"Behance icon"}/>
      </div>
    </div>

  )
}

export default Porfolios

function Icons({ to, src, alt }) {
  return (
    <Link to={to}><img src={src} alt={alt} /></Link>
  )
}