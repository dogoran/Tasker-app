import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCookie, isTokenValid } from 'utils/cookie';
import { login, logout } from 'features/LoginPage/actions';

const Navbar = (props) => {
  useEffect(() => {
    if (isTokenValid() && !props.isLogged) {
      props.login();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <Link className="navbar-brand mr-auto" to="/">
        Tasker-app
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          {
            props.isLogged
              ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setCookie({ token: '' });
                    props.logout();
                  }}
                >
                  Logout
                </button>
              )
              : (
                <NavLink
                  className="btn btn-secondary"
                  to="/login"
                >
                  Login as admin
                </NavLink>
              )
          }
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
