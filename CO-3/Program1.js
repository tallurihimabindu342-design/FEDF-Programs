import './styles.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="text-center">
      <img className="spin" id="logo" alt="Spinning sun" src={logo} />
      <h1>ReactJs by CodeTantra</h1>
      <p>
        You are embarking on a journey to acquire some of the most
        valuable practical skills in software development.
      </p>
    </div>
  );
}

export default App;