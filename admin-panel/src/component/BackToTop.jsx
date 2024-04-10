import React, { useEffect, useState } from "react";

function BackToTop() {
  const[isVisible, setIsVisible] = useState(false);
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let NotVisisbleAt = 250;
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

      if(scrolled > NotVisisbleAt){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
    {isVisible && (
    <button
      style={{ position: "fixed", bottom: "1rem", right: "2rem", backgroundColor:"#012970" , border:"0"}}
      className="backToTop-btn btn btn-primary"
      onClick={backToTop}
    >
      <i class="bi bi-arrow-up"></i>
    </button>
    )}
    </>
  );
}
export default BackToTop;
