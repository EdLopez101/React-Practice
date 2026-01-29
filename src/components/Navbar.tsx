import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js for interactive components

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div>Home</div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#"></a>Option 1
                </li>
                <li>
                  <a className="dropdown-item" href="#"></a>Option 2
                </li>
                <li>
                  <a className="dropdown-item" href="#"></a>Option 3
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div>Home</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
