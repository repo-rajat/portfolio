import React from 'react';

const FireflyField = () => {
  // 1. Just decide how many you want!
  const fireflyCount = 20;

  // 2. Generate random properties for each one
  const fireflies = Array.from({ length: fireflyCount }).map(() => ({
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    size: Math.random() * 2 + 2 + "px",
    duration: Math.random() * 5 + 10 + "s",
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  }));

  return (
    <div className="firefly-container" aria-hidden="true">
      {fireflies.map((fly, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            left: fly.left,
            top: fly.top,
            width: fly.size,
            height: fly.size,
            backgroundColor: fly.color,
            boxShadow: `0 0 10px ${fly.color}`,
            animationDuration: fly.duration,
          }}
        />
      ))}

      <style>{`
        .firefly-container {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
          contain: layout paint;
        }

        .firefly {
          position: absolute;
          border-radius: 50%;
          opacity: 0.8;
          animation: float-around infinite ease-in-out;
        }

        @keyframes float-around {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -50px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(40px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default FireflyField;
