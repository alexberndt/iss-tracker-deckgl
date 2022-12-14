/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      css={css`
        padding-bottom: 0;
      `}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          ISS Tracker
        </a>
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
          <ul className="navbar-nav me-auto m-1 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Map
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
