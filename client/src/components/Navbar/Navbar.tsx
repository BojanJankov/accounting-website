import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/#home">HOME</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="/#about">ABOUT</a>
        </li>
        <li>
          <a href="/#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
