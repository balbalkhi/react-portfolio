import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I’m Basem Al Balkhi – a passionate software engineering student with a solid background in accounting. I focus on delivering clean, creative, and practical solutions.</p>

      <h3>Mission Statement:</h3>
      <p>To continuously learn and build impactful digital solutions that merge business insight with modern technology.</p>

      <Link to="/about">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Learn More About Me</button>
      </Link>
    </div>
  );
}

export default Home;