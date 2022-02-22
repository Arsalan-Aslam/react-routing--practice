import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1>Home</h1>
      <nav>
        <Link to='/'>Home</Link> | <Link to='About'>About</Link> |{" "}
        <Link to='/Contact'>Contact</Link>
      </nav>
    </div>
  );
}

export default App;
