import { Link } from 'react-router-dom';
import '../css/Error.css';

export default function Error() {
  return (
    <div id="error" className="error-container">
      <h1>404</h1>
      <p>Sorry! Something went wrong.</p>
      <Link to="/">
        <button type="button" className="error-home-button">Home</button>
      </Link>
      <div className="error-background" />
    </div>
  );
}
