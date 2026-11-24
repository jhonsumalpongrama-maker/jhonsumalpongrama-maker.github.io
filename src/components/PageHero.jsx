export default function PageHero({ label, title, highlight, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="code-label">{label}</span>
        <h1>
          {title} <span>{highlight}</span>
        </h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
