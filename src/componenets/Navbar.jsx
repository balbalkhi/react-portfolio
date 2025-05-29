import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <img src="/logo.svg" alt="Logo" width="50" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;