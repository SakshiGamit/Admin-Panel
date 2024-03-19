import React from "react";

const Register = () => {
  return (
    <>
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center  w-auto"
                >
                  <figure className="m-0">
                    <img src={require("../images/logo.png")} alt="logo"></img>
                  </figure>
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
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
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-12">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="yourName"
                        required
                      ></input>
                      <div className="invalid-feedback">
                        Please, enter your name!
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Your Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="yourEmail"
                        required
                      ></input>
                      <div className="invalid-feedback">
                        Please, enter a valid email address!
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Username</label>
                      <div className="input-group has-validation">
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
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPass"
                        required
                      />
                      <div className="invalid-feedback">
                        Please choose a password.
                      </div>
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
                         I agree and accept the <a href="index.html">terms and conditions</a>
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Register
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Don't have account?
                        <a href="index.html"> Create an account</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              {/* card ends */}
              <div className="credits">
                Designed by
                <a href="index.html"> NiceAdmin</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
