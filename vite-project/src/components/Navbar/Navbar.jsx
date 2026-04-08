import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Q</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>DeFi App</li>
        <li>Assets</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>

      <button className="btn">Create Account</button>
    </div>
  );
};

export default Navbar;