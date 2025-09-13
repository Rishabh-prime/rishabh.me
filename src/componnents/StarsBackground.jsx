import { useEffect } from 'react';
import Bgone from "../assets/bg_one.png";
import Bgtwo from "../assets/bg_two.png";
import Bgthree from "../assets/bg_three.png";
import Bgfour from "../assets/about_four.png";
import Bgfive from "../assets/about_five.png";
import Bgsix from "../assets/about_six.png";
import Bgseven from "../assets/about_seven.png";
import Bgeight from "../assets/about_eight.png";
import Bgnine from "../assets/about_nine.png";

const StarsBackground = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    starsContainer.innerHTML = '';

    // Generate stars
    for (let i = 0; i < 2000; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }

    // Helper function to create image with custom style
    const createImage = (src, styles = {}) => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('bg-image');
      Object.assign(img.style, styles);
      starsContainer.appendChild(img);
    };

    // Your exact placements
    createImage(Bgnine, {
      position: "absolute",
      top: "5%",  // top right
      right: "5%",
      width: "180px", // bigger size
      height: "auto",
    });

    // createImage(Bgeight, {
    //   position: "absolute",
    //   bottom: "5%",  // bottom
    //   left: "50%",
    //   transform: "translateX(-50%)",
    //   width: "120px",
    //   height: "auto",
    // });

    createImage(Bgseven, {
      position: "absolute",
      top: "60%", // center middle
      left: "50%",
      transform: "translate(-50%, -50%)",
      
    });

    // createImage(Bgsix, {
    //   position: "absolute",
    //   top: "60%",
    //   right: "5%", // right side
    //   width: "10rem",
    //   height: "auto",
    // });

    // createImage(Bgfive, {
    //   position: "absolute",
    //   top: "40%",
    //   left: "5%", // left side
    //   width: "12rem",
    //   height: "auto",
    // });

    // createImage(Bgfour, {
    //   position: "absolute",
    //   bottom: "0", // footer
    //   left: "10%",
    //   width: "100px",
    //   height: "auto",
    // });

    // createImage(Bgthree, {
    //   position: "absolute",
    //   top: "20%", // free placement
    //   left: "70%",
    //   width: "90px",
    //   height: "auto",
    // });

    // createImage(Bgtwo, {
    //   position: "absolute",
    //   top: "30%", // somewhere in center
    //   left: "10%",
    //   width: "110px",
    //   height: "auto",
    // });

    // // Optional: place bg_one randomly (or remove if not needed)
    // createImage(Bgone, {
    //   position: "absolute",
    //   top:  "5%", 
    //   left: Math.random() * 80 + "%",
    //   width: "80px",
    //   height: "auto",
    // });

  }, []);

  return <div className="stars"></div>;
};

export default StarsBackground;
