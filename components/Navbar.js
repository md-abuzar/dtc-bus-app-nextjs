import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/bus-route-logo.png" alt="" width="30" height="26" class="d-inline-block align-text-top" />
            <span className="bus">BUS</span> <span className="route">ROUTE</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/pmpml">Pune Bus Route (PMPML)</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar