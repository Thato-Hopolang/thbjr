import Hero from "../Components/Hero/Hero"
import Porfolios from "../Components/Portfolios/Porfolios"
import Project from "../Components/Projects/Project"

const Home = () => {
  return (
    <div className="hero-section">
      <Hero/>
      <Project/>
      <Porfolios/>
    </div>
  )
}

export default Home
