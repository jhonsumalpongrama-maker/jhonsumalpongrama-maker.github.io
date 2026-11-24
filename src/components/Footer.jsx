export default function Footer({ code }) {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; 2026 Sherwin John S. Rama</p>
        <span className="footer-code">{code}</span>
      </div>
    </footer>
  );
}
