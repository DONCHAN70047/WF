import React, { useState, useEffect } from 'react';
import './MomentSlider.css';

const images = [
  "/PIC.jpg",
  "/PIC2.jpg",
  "/PIC3.jpg",
  "/PIC4.jpg",
  "/PIC5.jpg",
  "/PIC6.jpg",
  "/PIC7.jpg",
  "/PIC8.jpg"
];

const MomentSlider = ({ onNextPage, onPreviousPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`luxury-card ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated Background */}
      <div className="luxury-background">
        <div className="particle-field">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Card Container */}
      <div className="card-wrapper">
        <div className="luxury-card-inner">
          {/* Header */}
          <div className="luxury-header">
            <div className="crown-container">
              <div className="crown">👑</div>
              <div className="crown-glow"></div>
            </div>
            <div className="premium-badge">
              <span>PREMIUM</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="content-section">
            <div className="luxury-text">
              <h1 className="main-title">
                <span className="title-line">HAPPY</span>
                <span className="title-line">BIRTHDAY</span>
              </h1> 
              <div className="subtitle">Happy birthday Bubu❤️❤️... Some moments are truly unique🙄🙄... <br /> Come, let’s relive some beautiful moments through pictures.....💁‍♂️</div>
            </div>

            {/* Image Slider */}
            <div className="luxury-cake">
              <div className="cake-image-container">
                <img 
                  src={images[currentImage]} 
                  alt="Birthday Memories"
                  className="cake-image"
                />
                
                <div className="cake-overlay"></div>
              </div>
              
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="champagne-glasses">
                <div className="glass glass-1"></div>
                <div className="glass glass-2"></div>
                <div className="glass glass-3"></div>
              </div>
              <div className="luxury-balloons">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`balloon balloon-${i % 4}`}
                    style={{
                      left: `${10 + (i % 4) * 20}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <div className="balloon-string"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="luxury-footer">
            <div className="footer-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-diamond">💎</div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Ambient Lighting */}
      <div className="ambient-lights">
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
      </div>
    </div>
  );
};

export default MomentSlider;
