import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
// import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import travel from '../../assets/travel.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/Rajivs1/WeatherApp"
          h3="Weather App"
          p="Weather App"
        />
        <ProjectCard
          src={travel}
          link="https://github.com/Rajivs1/plan-my-trip"
          h3="Plan My Trip"
          p="Tourist places in India"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Rajivs1"
          h3="FitPro"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
