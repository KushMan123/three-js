import { create } from "zustand";

export const useScrollStore = create((set) => ({
  dreiScroll: 0,
  isScrolling: false,
  setDreiScroll: (v) => set({ dreiScroll: v }),
  setIsScrolling: (v) => set({ isScrolling: v }),
}));
