import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Page } from "./pageStyles";
import { projects } from "./projects";

export function ProjectPage() {
  const { slug } = useParams()
  const position = projects.findIndex((p) => p.slug === slug)
  const project = projects[position]
  const [index, setIndex] = useState(0)

  // New project: back to the top, first screenshot, page title
  useEffect(() => {
    window.scrollTo(0, 0)
    setIndex(0)
    if (project) document.title = `${project.title} | Moutia Bensaad`
    return () => {
      document.title = "Moutia Bensaad"
    }
  }, [project])

  const count = project ? project.details.gallery.length : 0

  // Arrow keys browse the screenshots
  useEffect(() => {
    if (count < 2) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [count])

  if (!project) return <Navigate to="/" replace />

  const { details } = project
  const shot = details.gallery[Math.min(index, count - 1)]
  const previous = projects[(position - 1 + projects.length) % projects.length]
  const next = projects[(position + 1) % projects.length]

  return (
    <Page>
      <HashLink smooth to="/#project" className="back">
        ← All projects
      </HashLink>

      <header className="head">
        <span className="category">{project.category}</span>
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>
        {project.link && (
          <a className="visit" href={project.link} target="_blank" rel="noreferrer">
            {project.linkLabel || "Visit project"} ↗
          </a>
        )}
      </header>

      <section className="gallery">
        <div className={shot.mobile ? "stage mobile" : "stage"}>
          <img src={shot.src} alt={shot.caption} />
          {count > 1 && (
            <>
              <button className="nav prev" onClick={() => setIndex((index - 1 + count) % count)} aria-label="Previous screenshot">
                ‹
              </button>
              <button className="nav next" onClick={() => setIndex((index + 1) % count)} aria-label="Next screenshot">
                ›
              </button>
            </>
          )}
        </div>
        <p className="caption">
          {shot.caption}
          {count > 1 && <span> · {index + 1} / {count}</span>}
        </p>
        {count > 1 && (
          <div className="thumbs">
            {details.gallery.map((g, i) => (
              <button key={g.src} className={i === index ? "thumb active" : "thumb"} onClick={() => setIndex(i)} aria-label={g.caption}>
                <img src={g.src} alt="" />
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="columns">
        <div>
          <h2>Context</h2>
          <p>{details.context}</p>
          <h2>My role</h2>
          <p>{details.role}</p>
          <h2>Key features</h2>
          <ul className="bullets">
            {details.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <aside>
          <h2>Highlights</h2>
          <ul className="bullets highlights">
            {details.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>Tech stack</h2>
          {details.stack.map((group) => (
            <div className="stack" key={group.label}>
              <span>{group.label}</span>
              <ul className="tech-list">
                {group.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>

      <nav className="pager">
        <Link to={`/projects/${previous.slug}`}>
          <span>← Previous project</span>
          {previous.title}
        </Link>
        <Link to={`/projects/${next.slug}`} className="next-project">
          <span>Next project →</span>
          {next.title}
        </Link>
      </nav>
    </Page>
  )
}
