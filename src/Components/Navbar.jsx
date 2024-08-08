import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Payroll</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mx-auto">
            <form className="d-flex" role="search">
              <div className="position-relative mx-auto" style={{ width: '500px' }}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ fontSize: '1.2rem', paddingRight: '2rem', width: '100%' }} // Increased font size of the input
                />
                <span className="search-emoji">🔍</span>
              </div>
              <button
                className="btn btn-outline-primary"
                type="submit"
                style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem',width:'100px' }} // Decreased font size and padding of the button
              >
                Search
              </button>
            </form>
          </div>
          <div className="navbar-icons">
            <a href="/login" className="nav-link">
              <FaSignInAlt className="icon" /> Login
            </a>
            <a href="/signup" className="nav-link">
              <FaUserPlus className="icon" /> Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'set title here'
};
