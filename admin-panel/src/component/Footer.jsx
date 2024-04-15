import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="copyRight">
        &copy; Copyright{" "}
        <strong>
          <span>Astoria</span>
        </strong>
        . All Rights Reserved
        <div className="credits">
          Designed by <a href="/Home">Astol</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
