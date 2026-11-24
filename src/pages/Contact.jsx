import PageHero from "../components/PageHero.jsx";
import Cta from "../components/Cta.jsx";
import { contacts } from "../data/contacts.js";

export default function Contact() {
  return (
    <>
      <PageHero label={'connect("Sherwin");'} title="Contact" highlight="Me">
        Feel free to connect with me through my social media accounts, email,
        or contact number.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">// social_links</span>
            <h2>Let’s Connect</h2>
            <p>Click any social card below to open the corresponding profile.</p>
          </div>

          <div className="contact-grid">
            {contacts.map((c) => (
              <a
                key={c.label}
                className="contact-card"
                href={c.href}
                {...(c.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="// end_of_portfolio"
        title="Thanks for visiting my website."
        text="I’m continuously learning and improving my skills as a Computer Science student."
        to="/"
        button="Back to Home"
      />
    </>
  );
}
