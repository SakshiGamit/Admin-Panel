import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <NavLink
                  to="/Home"
                  className="logo d-flex align-items-center  w-auto"
                >
                  <figure className="m-0">
                    <img src={require("../images/logo.png")} alt="logo"></img>
                  </figure>
                  <span className="d-none d-lg-block">LogiCare</span>
                </NavLink>
              </div>
              {/* logo end */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p className="text-center small">
                      Enter your username & password to Login
                    </p>
                  </div>
                  <form className="row g-3">
                    <div className="col-12">
                      <label className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value="AstoLogiCare"
                          id="yourUsername"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value="AstoLogiCare"
                        className="form-control"
                        id="yourPassword"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          value="true"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                    <NavLink to="/Home">
                      <button className="btn btn-primary w-100" type="submit">
                        Login
                      </button>
                      </NavLink>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Don't have account?
                        <NavLink to="/register" > Create an account</NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              {/* card ends */}
              <div className="credits">
                Designed by
                <a href="/Home"> LogiCare</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
