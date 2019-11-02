import React from 'react';

const LoginFormComponent = (props) => (
  <form>
    <div className="form-group">
      <label htmlFor="usernameInput">Username</label>
      <input
        type="username"
        className="form-control"
        id="usernameInput"
        placeholder="Enter username"
      />
    </div>
    <div className="form-group">
      <label htmlFor="passwordInput">Password</label>
      <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
);

export default LoginFormComponent;
