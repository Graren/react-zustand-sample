const CounterSlice = (set, get) => ({
  value: 0,
  increment: () => set((s) => ({ value: s.value + 1 })),
  decrement: () => set(() => ({ value: get().value - 1 })),
});

export default CounterSlice;
