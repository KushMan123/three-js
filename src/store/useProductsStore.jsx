import { create } from "zustand";

export const useProductStore = create((set) => ({
  productHovered: false,
  activeProduct: null, // the currently hovered product info
  setActiveProduct: (product) => set({ activeProduct: product }),
  clearActiveProduct: () => set({ activeProduct: null }),
  setProductHovered: (v) => set({ productHovered: v }),
}));
