import React, { useState, useEffect } from 'react';
import './File2.css';

const File2 = ({ onNextPage, onPreviousPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
        
        {/* Luxury Gradient Overlay */}
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Card Container */}
      <div className="card-wrapper">
        <div className="luxury-card-inner">
          {/* Premium Header */}
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
              <div className="subtitle">Celebrating using  web-technology...🙄🙄🫣</div>
            </div>

            {/* Luxury Cake */}
            <div className="luxury-cake">
              <div className="cake-image-container">
                <img 
                  src="https://th.bing.com/th/id/OIP.k9ZQt7hJ-KSUxwRLPdtKsAHaG2?w=199&h=184&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" 
                  alt="Luxury Birthday Cake"
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

          {/* Premium Footer */}
          <div className="luxury-footer">
            <div className="footer-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-diamond">💎</div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="luxury-navigation">
        <button className="luxury-btn prev-btn" onClick={onPreviousPage}>
          <span className="btn-icon">←</span>
          <span className="btn-text">Previous</span>
        </button>
        <button className="luxury-btn next-btn" onClick={onNextPage}>
          <span className="btn-text">Next</span>
          <span className="btn-icon">→</span>
        </button>
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

export default File2; 