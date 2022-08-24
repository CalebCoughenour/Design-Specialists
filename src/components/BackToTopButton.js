import React from 'react';
import {useEffect, useState} from 'react';

function BackToTopButton () {
  
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, []); 

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {backToTopButton && (
        <button onClick={scrollUp} style={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          height: '30px',
          width: '35px',
          fontSize: '20px',
          backgroundColor: '#d3d3d3',
          border: '2px black solid',
          borderRadius: '10px',
          zIndex: '5'
        }}>^</button>
      )}
    </>
  );
};

export default BackToTopButton;