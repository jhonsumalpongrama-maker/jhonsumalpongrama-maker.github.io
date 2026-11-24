import PageHero from "../components/PageHero.jsx";
import Cta from "../components/Cta.jsx";
import { projects } from "../data/projects.js";

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="github-card github-card-link"
    >
      <div className="repo-top">
        <div className="repo-icon">&lt;/&gt;</div>
        <span className="repo-public">Public</span>
      </div>

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="repo-meta">
        <span className="repo-language">
          <span className={`language-dot ${project.dot}`}></span>
          {project.language}
        </span>
        <span className="repo-stars">☆ {project.stars}</span>
      </div>

      <div className="repo-footer">
        <span>Updated on {project.updated}</span>
        <span className="github-text">View Code on GitHub ↗</span>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <>
      <PageHero
        label="git log --projects"
        title="My"
        highlight="GitHub Projects"
      >
        Here are some of the projects I have worked on and uploaded to GitHub.
        These projects represent my experience in web development, Dart,
        JavaScript, CSS, and software development.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">// repositories</span>
            <h2>Featured Projects</h2>
            <p>A collection of my public GitHub repositories and coding projects.</p>
          </div>

          <div className="github-grid">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <div className="github-note">
            <span className="eyebrow">// github_status</span>
            <p>
              These are public repositories from my GitHub. Click any project
              card to view its source code directly on GitHub.
            </p>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="// contact_me"
        title="Interested in my work?"
        text="You can connect with me through Facebook, TikTok, Instagram, email, or my contact number."
        to="/contact"
        button="Contact Me"
      />
    </>
  );
}
