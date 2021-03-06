import create from "zustand";

interface Counter {
  count: number;
  increment: () => void;
}

export const useCounter = create<Counter>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));
