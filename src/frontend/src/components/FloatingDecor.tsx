import { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  type: 'heart' | 'star';
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingDecor() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const newItems: FloatingItem[] = [];
    
    // Create 20 floating hearts and stars
    for (let i = 0; i < 20; i++) {
      newItems.push({
        id: i,
        type: i % 2 === 0 ? 'heart' : 'star',
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 20 + Math.random() * 30,
      });
    }
    
    setItems(newItems);
  }, []);

  return (
    <div className="floating-decor-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="floating-item"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.type === 'heart' ? '💗' : '⭐'}
        </div>
      ))}
    </div>
  );
}
