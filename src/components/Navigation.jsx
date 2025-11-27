import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/library">Library</Link>
      <Link to="/musings">Musings</Link>
    </nav>
  );
}
