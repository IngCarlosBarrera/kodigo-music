// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Kodigo Music</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/explore">Explorar</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
