import React from "react";
import create from "zustand";
import shallow from "zustand/shallow";
import Counter from "../components/Counter";
import useRootStore from "../store";
import CounterSlice from "../store/CounterSlice";

const useLocalCounterStore = create(CounterSlice);

const complexSelector = (state) => ({
  count: state.value,
  increment: state.increment,
  decrement: state.decrement,
});

const ZustandCounter = () => {
  const rootCount = useRootStore((state) => state.value);
  const rootIncrement = useRootStore((state) => state.increment);
  const rootDecrement = useRootStore((state) => state.decrement);

  const { count, increment, decrement } = useLocalCounterStore(
    complexSelector,
    shallow
  );

  return (
    <>
      <Counter
        count={rootCount}
        onIncrement={rootIncrement}
        onDecrement={rootDecrement}
      />

      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </>
  );
};

export default ZustandCounter;
