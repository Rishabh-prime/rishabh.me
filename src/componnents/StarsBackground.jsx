import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create 300 stars for a denser effect
      for (let i = 0; i < 1500; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
      }
    };

    createStars();

    // Recreate stars on window resize
    const handleResize = () => createStars();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return  <><div className="stars"></div></> ;
};

export default StarsBackground;