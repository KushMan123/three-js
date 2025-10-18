import { create } from "zustand";

export const useScrollStore = create((set) => ({
  dreiScroll: 0,
  isScrolling: false,
  scrollDirection: "down",
  previousScroll: 0,
  setDreiScroll: (v) =>
    set((state) => ({
      dreiScroll: v,
      scrollDirection: v > state.previousScroll ? "down" : "up",
      previousScroll: v,
    })),
  setIsScrolling: (v) => set({ isScrolling: v }),
}));
