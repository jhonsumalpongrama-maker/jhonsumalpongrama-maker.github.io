import { Link } from "react-router-dom";

// NOTE: index.html wasn't included in the files I received, so this page is
// rebuilt from the home-page classes in styles.css. Replace the text with your
// original wording.
const features = [
  {
    icon: "</>",
    title: "Web Development",
    text: "Building simple, responsive websites with HTML, CSS, and JavaScript.",
  },
  {
    icon: "{ }",
    title: "Programming",
    text: "Practicing problem solving and programming logic through school activities and projects.",
  },
  {
    icon: "git",
    title: "Projects",
    text: "Sharing my work publicly on GitHub as I keep learning and improving.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="code-label">{"const developer = \"Sherwin\";"}</span>
            <h1>
              Hi, I’m <span>Sherwin John S. Rama</span>
            </h1>
            <p className="role">&gt; Computer Science Student</p>
            <p>
              I enjoy learning about programming, web development, and
              technology, and I like creating simple and responsive websites.
            </p>

            <div className="hero-buttons">
              <Link to="/work" className="btn">
                View Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="code-window profile-card">
            <div className="profile-photo">
              <div className="home-profile-content">
                <div className="home-profile-frame">
                  <img
                    className="home-profile-image"
                    src="/profile.jpg"
                    alt="Sherwin John S. Rama"
                  />
                </div>
                <h3>Sherwin John S. Rama</h3>
                <p className="home-profile-role">Computer Science Student</p>
                <span className="home-profile-status">
                  &lt; aspiring_web_developer /&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">// what_i_do</span>
            <h2>What I’m focused on</h2>
          </div>

          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
