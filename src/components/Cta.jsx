import { Link } from "react-router-dom";

export default function Cta({ eyebrow, title, text, to, button }) {
  return (
    <section className="section">
      <div className="container cta">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to={to} className="btn">
          {button}
        </Link>
      </div>
    </section>
  );
}
