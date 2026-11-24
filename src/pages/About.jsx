import PageHero from "../components/PageHero.jsx";
import Cta from "../components/Cta.jsx";

const personalInfo = [
  ["name", "Sherwin John S. Rama"],
  ["status", "Single"],
  ["sex", "Male"],
  ["date_of_birth", "December 17, 2005"],
  ["address", "Purok Makugihon, Baybay Maningcol, Ozamiz City"],
];

const education = [
  {
    title: "College",
    text: (
      <>
        Bachelor of Science in Computer Science
        <br />
        Currently studying and continuously developing skills in programming,
        web development, problem solving, and computer technologies.
      </>
    ),
  },
  {
    title: "Current Focus",
    text: "Learning web development and strengthening my foundation in coding through school activities, exercises, and personal projects.",
  },
  {
    title: "Goal",
    text: "To grow as a developer, create useful digital solutions, and gain more real-world experience in technology.",
  },
];

export default function About() {
  return (
    <>
      <PageHero label="class AboutMe { }" title="About" highlight="Me">
        Here are some personal details and information about my education.
      </PageHero>

      <section className="section">
        <div className="container">
          {/* PROFILE */}
          <div className="about-profile">
            <div className="about-profile-frame">
              <img src="/profile.jpg" alt="Sherwin John S. Rama" />
            </div>

            <div className="about-profile-text">
              <span className="eyebrow">// profile</span>
              <h2>Sherwin John S. Rama</h2>
              <p className="about-role">Computer Science Student</p>

              <p className="about-description">
                I am a Computer Science student who enjoys learning about
                programming, web development, and technology. I like creating
                simple and responsive websites while continuously improving my
                coding and problem-solving skills.
              </p>

              <span className="about-status">&lt; aspiring_web_developer /&gt;</span>
            </div>
          </div>

          <div className="about-layout">
            <div className="about-box">
              <span className="eyebrow">// personal_info</span>
              <h2>Personal Information</h2>

              <div className="info-list">
                {personalInfo.map(([key, value]) => (
                  <div className="info-row" key={key}>
                    <strong>{key}:</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-box">
              <span className="eyebrow">// education</span>
              <h2>Education</h2>

              <div className="timeline">
                {education.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="// explore_work"
        title="See what I’m interested in building."
        text="My main work area in this portfolio is web development."
        to="/work"
        button="View Work"
      />
    </>
  );
}
