import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./detailStyles";
import type { ProjectItem } from "./projects";

type Props = {
  project: ProjectItem
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: Props) {
  const { details } = project
  const [index, setIndex] = useState(0)
  const count = details.gallery.length
  const shot = details.gallery[index]

  // Esc closes, arrows browse the screenshots, page behind does not scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count)
    }
    document.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [count, onClose])

  return createPortal(
    <Overlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
      <article className="panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <header className="head">
          <span className="category">{project.category}</span>
          <h3 id="project-detail-title">{project.title}</h3>
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
            <h4>Context</h4>
            <p>{details.context}</p>
            <h4>My role</h4>
            <p>{details.role}</p>
            <h4>Key features</h4>
            <ul className="bullets">
              {details.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <aside>
            <h4>Highlights</h4>
            <ul className="bullets highlights">
              {details.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h4>Tech stack</h4>
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
      </article>
    </Overlay>,
    document.body
  )
}
