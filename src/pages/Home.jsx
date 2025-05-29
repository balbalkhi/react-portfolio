import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Mission Statement: To grow as a creative and skilled developer.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}