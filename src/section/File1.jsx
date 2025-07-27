import React from 'react';
import './File1.css';

const File1 = ({ onNextPage }) => {
  return (
    <div className="birthday-card">
      <div className="card-background">
        {/* Confetti */}
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`confetti confetti-${i % 6}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Balloons */}
        <div className="balloon balloon-blue" style={{ left: '10%', bottom: '15%' }}></div>
        <div className="balloon balloon-pink" style={{ right: '15%', top: '10%' }}></div>
        <div className="balloon balloon-white" style={{ right: '8%', bottom: '20%' }}></div>
        <div className="balloon balloon-yellow" style={{ right: '5%', bottom: '25%' }}></div>

        {/* Paper Decorations */}
        <div className="paper-decoration orange" style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}></div>
        <div className="paper-decoration green" style={{ bottom: '10%', left: '15%' }}></div>
        <div className="paper-decoration yellow" style={{ top: '8%', right: '10%' }}></div>

        {/* Candles */}
        <div className="candle yellow-dots" style={{ left: '20%', top: '30%' }}></div>
        <div className="candle red-dots" style={{ right: '25%', top: '25%' }}></div>
        <div className="candle green-blue" style={{ left: '15%', bottom: '30%' }}></div>

        {/* Ribbons/Streamers */}
        <div className="ribbon yellow" style={{ left: '5%', top: '20%' }}></div>
        <div className="ribbon blue" style={{ right: '5%', top: '40%' }}></div>
        <div className="ribbon pink" style={{ left: '8%', bottom: '40%' }}></div>

        {/* Fireworks */}
        <div className="firework left">
          <div className="firework-line red"></div>
          <div className="firework-line blue"></div>
          <div className="firework-line green"></div>
          <div className="firework-line yellow"></div>
        </div>
        <div className="firework right">
          <div className="firework-line red"></div>
          <div className="firework-line blue"></div>
          <div className="firework-line green"></div>
          <div className="firework-line yellow"></div>
        </div>

        {/* Main Text */}
        <div className="birthday-text">
          <span className="birthday">Happy Birthday Bubu😊🎂<br />Happy happy returns of the day....🥳</span>
        </div>

        {/* Navigation Button */}
        <button className="next-page-btn" onClick={onNextPage}>
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default File1;
