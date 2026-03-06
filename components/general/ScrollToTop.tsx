"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibilty = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibilty);

    return () => window.removeEventListener("scroll", toggleVisibilty);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-8 right-4 w-10 h-10 cursor-pointer rounded-full grid place-items-center bg-primary/90 transtion-colors duration-150 hover:bg-primary/70"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
