import { create } from "zustand";

interface INavMenuStore {
  isMobileMenuOpen: boolean;
  isProfileOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openProfile: () => void;
  closeProfile: () => void;
}

export const useIsMobileMenuOpenStore = create<INavMenuStore>((set) => ({
  isMobileMenuOpen: false,
  isProfileOpen: false,

  openMobileMenu: () =>
    set({ isMobileMenuOpen: true, isProfileOpen: false }),

  closeMobileMenu: () =>
    set({ isMobileMenuOpen: false }),

  openProfile: () =>
    set({ isProfileOpen: true, isMobileMenuOpen: false }),

  closeProfile: () =>
    set({ isProfileOpen: false }),
}));
