import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About Me</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;