import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          One-click for Asset <span>Defense</span>
        </h1>

        <p>
          Dive into the art assets, where innovative blockchain technology
          meets financial expertise
        </p>

        <div className="hero-buttons">
          <button className="primary">Open App</button>
          <button className="secondary">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;