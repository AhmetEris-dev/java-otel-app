import React, { useEffect, useRef, useState } from "react";
 
type CounterProps = {
  targetValue: number; 
};
 
const Counter: React.FC<CounterProps> = React.memo(({ targetValue }) => {
  const [value, setValue] = useState(0);
  const animationRef = useRef<number | null>(null);
 
  useEffect(() => {
    let currentValue = 0;
    const increment = targetValue / 200;
 
    const animate = () => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        setValue(currentValue);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        setValue(currentValue);
        animationRef.current = requestAnimationFrame(animate);
      }
    };
 
    animationRef.current = requestAnimationFrame(animate);
 
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue]);
 
  return <h2 className="counter">{Math.ceil(value)}</h2>;
});
 
export default Counter;