import React from "react";
import notFound from "../images/not-found.svg"

const Error = ()=>{
    return (
        <>
            <div className="container">
                <section className="section error_404 py-4 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist.</h2>
                <a href="/">
                    <button className="btn">Back to Home</button>
                </a>
                <img src={notFound} className="py-4 img-fluid" alt="Page Not Found" />
                <div className="credits">
                Designed by
                <a href="/"> NiceAdmin</a>
              </div>
                </section>
            </div>
        </>
    )
}
export default Error;