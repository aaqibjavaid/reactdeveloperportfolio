import React from "react";
const Header = () => {
  return (
    <>
      <div className="header-main fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark p-3" id="headerNav">
          <div className="container-fluid">
          <a className="nav-link mx-2 h4 d-block d-lg-none" href="#">
                    <img
                      src="../images/logo.jpg"
                      height={50}
                    />
                  </a>
            <button
              className="navbar-toggler bg-hover-success mobile-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 h4 active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 h4" href="#">
                    Education
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link mx-2 h4" href="#">
                    <img
                      src="../images/logo.jpg"
                      height={50}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 h4" href="#">
                    Profession
                  </a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link mx-2 h4" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
