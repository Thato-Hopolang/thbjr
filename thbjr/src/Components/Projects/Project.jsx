/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Project = () => {
  return (
    <div className="project-container">
      <ProjectTile/>
      <ProjectTile/>
      <ProjectTile/>
    </div>
  )
}

export default Project

function ProjectTile() {
  return (
    <div className="project">

      <div className="optionsholder">
      <ProjectOption className={"btn-code btn-border"} text={"Source Code"}/>
      <ProjectOption className={"btn-live btn-bg"} text={"Live Preview"}/>
      </div>

    </div>
  )
}

function ProjectOption({ className, text }) {
  return (
    <Link className={className}>{text}</Link>
  )
}