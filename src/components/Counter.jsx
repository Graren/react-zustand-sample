import React from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={onIncrement}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
