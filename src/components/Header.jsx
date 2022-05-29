import React from "react";
const Header = () => {
  return (
    <>
      <div className="header-main fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark p-3" id="headerNav">
          <div className="container-fluid">
            <a className="nav-link mx-3 h4 d-block d-lg-none" href="#">
              <img src="../images/logo.jpg" height={50} />
            </a>
            <button
              className="navbar-toggler btn btn-success bg-dark"
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
                  <a className="nav-link mx-3" aria-current="page" href="#">
                    <button
                      type="button"
                      class="btn btn-outline-success btn-rounded"
                      data-mdb-ripple-color="dark"
                    >
                      Home
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" aria-current="page" href="#">
                    <button
                      type="button"
                      class="btn btn-outline-success btn-rounded "
                      data-mdb-ripple-color="dark"
                    >
                      Home
                    </button>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link mx-3 h4" href="#">
                    <img src="../images/logo.jpg" height={50} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" aria-current="page" href="#">
                    <button
                      type="button"
                      class="btn btn-outline-success btn-rounded "
                      data-mdb-ripple-color="dark"
                    >
                      Home
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" aria-current="page" href="#">
                    <button
                      type="button"
                      class="btn btn-outline-success btn-rounded "
                      data-mdb-ripple-color="dark"
                    >
                      Home
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <ul class="social-network social-circle">
          <li><a href="#" className="icoskpye" ><i className="fa fa-skype"></i></a></li>
          <li><a href="#" className="icoFacebook" ><i className="fa fa-facebook"></i></a></li>
          <li><a href="#" className="icoLinkedin"><i className="fa fa-linkedin"></i></a></li>
        </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
