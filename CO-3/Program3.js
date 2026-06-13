import ct from "./assets/logo.svg";

function App() {
  const profileImage = ct;

  return (
    <>
      <h1>About Section</h1>

      <div className="about-container">
        <h2 className="about-heading">About Me</h2>

        <p className="about-text">
          I am learning React and building awesome UIs!
        </p>

        <img
          src={profileImage}
          className="about-text"
          alt="Profile"
        />

        <button className="about-button">
          Know More
        </button>
      </div>
    </>
  );
}

export default App;