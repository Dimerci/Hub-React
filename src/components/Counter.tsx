import { useState } from "react";

interface CounterProps {
  incrementAmount: number;
}

function Counter({ incrementAmount }: CounterProps) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + incrementAmount);
  };

  const handleDecrease = () => {
    if (count >= incrementAmount) {
      setCount(count - incrementAmount);
    }
  };

  return (
    <div className="Button">
      <div>You have {count} projects</div>
      <button type="button" onClick={handleDecrease}>
        Click here to decrease
      </button>
      <button type="button" onClick={handleIncrease}>
        Click here to increase
      </button>
    </div>
  );
}

export default Counter;