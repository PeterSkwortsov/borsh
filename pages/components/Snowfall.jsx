"use client";

import { useEffect, useState } from "react";

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const newSnowflakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 10,
        character: ["❄", "•", "✽"][Math.floor(Math.random() * 3)],
      }));
      setSnowflakes(newSnowflakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            fontSize: `${snowflake.size}px`,
            animationDuration: `${snowflake.duration}s`,
            animationDelay: `${snowflake.delay}s`,
          }}
        >
          {snowflake.character}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
