import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import predictiveMaintenance from "../../assets/projects/predictive_maintenance.png"
import msTransport from "../../assets/projects/ms_transport.png"
import flutterIcon from "../../assets/flutter.svg"
import djangoIcon from "../../assets/django.svg"
import arduinoIcon from "../../assets/arduino.svg"

type ProjectItem = {
  title: string
  category: string
  description: string
  techs: string[]
  image?: string
  icons?: string[]
  link?: string
  featured?: boolean
}

const projects: ProjectItem[] = [
  {
    title: "Intelligent Predictive Maintenance System for Industrial Machines",
    category: "IoT · AI · Web & Mobile — Final-year project",
    description:
      "Final-year project (Professional Master, Mention Très Bien). A Raspberry Pi 5 with 5 sensors (temperature, vibration, thermal camera, current) monitors wire processing machines. A Random Forest model identifies the probable failure cause and XGBoost estimates the 24-hour failure risk. Alerts reach the maintenance team in real time on a React web dashboard and a Flutter mobile app, with interventions, preventive checklists and MTBF / MTTR indicators.",
    techs: ["Raspberry Pi", "Python", "scikit-learn", "XGBoost", "FastAPI", "Node.js", "MongoDB", "React", "Flutter"],
    image: predictiveMaintenance,
    featured: true,
  },
  {
    title: "MS Transport – Moving & Freight Platform (Web + Mobile)",
    category: "Web & Mobile — Bachelor final-year project",
    description:
      "Built from scratch for a moving company in France: customers estimate the volume of their furniture or goods, get an instant quote and book a date; admins validate requests, assign carriers and follow payments. The Flutter app adds Stripe payments and live carrier tracking on Google Maps. Redesigned in 2026.",
    techs: ["React", "Material UI", "Flutter", "Django REST", "MySQL", "Stripe", "Google Maps"],
    image: msTransport,
  },
  {
    title: "Neapolis Car – Car Rental Mobile App",
    category: "Mobile",
    description:
      "First mobile application of Neapolis Car, a car rental company, extending its reservation website. Clients can browse available cars, book a rental or a transfer service and follow their reservations. Published on Google Play.",
    techs: ["Flutter", "Django", "PostgreSQL"],
    icons: [flutterIcon, djangoIcon],
    link: "https://play.google.com/store/apps/details?id=com.neapolis_car.neapolis_car&pcampaignid=web_share",
  },
  {
    title: "Server Room Alarm System",
    category: "Embedded",
    description:
      "Alarm system for server rooms using Arduino, a SIM900 GSM module and motion sensors. Administrators receive real-time SMS notifications in case of unauthorized access.",
    techs: ["Arduino", "SIM900", "Sensors", "PHP", "MySQL"],
    icons: [arduinoIcon],
  },
]

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation
            key={project.title}
            animateIn="fadeInUp"
            className={project.featured ? "featured-wrapper" : undefined}
          >
            <div className={project.featured ? "project featured" : "project"}>
              <div className={project.image ? "media" : "media placeholder"}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  project.icons?.map((icon, i) => <img key={i} src={icon} alt="" />)
                )}
              </div>
              <div className="content">
                <header>
                  <span className="category">{project.category}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit project" />
                    </a>
                  )}
                </header>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {project.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
