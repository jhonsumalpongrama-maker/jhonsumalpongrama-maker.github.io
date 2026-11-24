import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <nav className="navbar container">
        <Link to="/" className="logo" onClick={close}>
          &lt;<span>RamzCode</span>/&gt;
        </Link>

        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={close}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
