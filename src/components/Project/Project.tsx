import { useCallback, useState } from "react";
import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { projects, ProjectItem } from "./projects";
import { ProjectDetail } from "./ProjectDetail";

export function Project() {
  const [open, setOpen] = useState<ProjectItem | null>(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation
            key={project.slug}
            animateIn="fadeInUp"
            className={project.featured ? "featured-wrapper" : undefined}
          >
            <div className={project.featured ? "project featured" : "project"}>
              <button className="media" onClick={() => setOpen(project)} aria-label={`Details: ${project.title}`}>
                {project.image && <img src={project.image} alt={project.title} />}
                <span className="media-hint">View details</span>
              </button>
              <div className="content">
                <header>
                  <span className="category">{project.category}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" title={project.linkLabel}>
                      <img src={externalLink} alt={project.linkLabel || "Visit project"} />
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
                  <button className="details-btn" onClick={() => setOpen(project)}>
                    View details →
                  </button>
                </footer>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      {open && <ProjectDetail project={open} onClose={close} />}
    </Container>
  );
}
