import { useEffect } from 'react';


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

   
  }, []);

  return <div className="stars"></div>;
};

export default StarsBackground;
