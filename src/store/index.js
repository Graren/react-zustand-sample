import create from "zustand";
import CounterSlice from "./CounterSlice";

const takesAWhile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
};

const FunnySlice = (set, get) => ({
  yeah: "yeah",
  waitTillItsCool: async () => {
    await takesAWhile();
    set({ yeah: `${get().yeah} it's cool` });
  },
});

const useRootStore = create((...args) => ({
  ...CounterSlice(...args),
  ...FunnySlice(...args),
}));

export default useRootStore;
