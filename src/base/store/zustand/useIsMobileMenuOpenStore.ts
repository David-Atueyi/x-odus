import { create } from "zustand";

interface IIsMobileMenuOpenStore {
  isMobileMenuOpen: boolean;

  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export const useIsMobileMenuOpenStore = create<IIsMobileMenuOpenStore>(
  (set) => ({
    //
    isMobileMenuOpen: false,
    //

    setIsMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
  })
);
