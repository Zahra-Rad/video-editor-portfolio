import { create } from "zustand";

type UiState = {
  contactModalOpen: boolean;
  activeCategory: string;
  setContactModalOpen: (open: boolean) => void;
  setActiveCategory: (category: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  contactModalOpen: false,
  activeCategory: "all",
  setContactModalOpen: (open) => set({ contactModalOpen: open }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
