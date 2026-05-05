import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">Boutique E-Commerce Demo</p>
          <h1>SoundHarbor Instruments</h1>
        </div>
        <nav className="tabs">
          <NavLink to="/" end className="tab-link">
            Home
          </NavLink>
          <NavLink to="/products" className="tab-link">
            Products
          </NavLink>
          <NavLink to="/guitars" className="tab-link">
            Guitars
          </NavLink>
          <NavLink to="/bass" className="tab-link">
            Bass
          </NavLink>
          <NavLink to="/keyboards" className="tab-link">
            Keyboards
          </NavLink>
          <NavLink to="/drums" className="tab-link">
            Drums
          </NavLink>
          <NavLink to="/contact" className="tab-link">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
