import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

export default function TwinklingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    
    // Create 30 twinkling stars
    for (let i = 0; i < 30; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        size: 24 + Math.random() * 32,
      });
    }
    
    setStars(newStars);
  }, []);

  return (
    <div className="twinkling-stars-container">
      {stars.map((star) => (
        <img
          key={star.id}
          src="/assets/generated/star-sprite.dim_128x128.png"
          alt=""
          className="twinkling-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
