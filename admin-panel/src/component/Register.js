import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
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
                  <span className="d-none d-lg-block">Logicare</span>
                </NavLink>
              </div>
              {/* logo end */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                    <p className="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>
                  <form className="row g-3">
                    <div className="col-12">
                      <label className="form-label" htmlFor="yourName">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="yourName"
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="yourEmail">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="yourEmail"
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="yourUserName">Username</label>
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="yourUserName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPass" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPass"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="acceptTerms"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="acceptTerms"
                        >
                          I agree and accept the <NavLink to="/">terms and conditions</NavLink>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Register
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account?
                        <NavLink to="/"> Login</NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              {/* card ends */}
              <div className="credits">
                Designed by
                <a href="/"> Logicare</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
