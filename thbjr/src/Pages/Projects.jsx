/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div className="project-page">
			<h4>"Your only as good as what you can produce"</h4>
      <div className="projects-holder">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  )
}

export default Projects

function ProjectTile() {
  return (
    <div className="projects-all project-one project-rest">
      <div className="optionsholder">
      <ProjectOption className={"btn-code"} text={"Source Code"}/>
      <ProjectOption className={"btn-live"} text={"Live Preview"}/>
      </div>
    </div>
  )
} 

function ProjectOption({ className, text }) {
  return (
    <Link className={className}>{text}</Link>
  )
}