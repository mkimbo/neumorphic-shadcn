import { create } from "zustand";
import { ReactNode } from "react";

export type GlobalDialogVariant = "default" | "fullscreen" | "scrollUp";

interface GlobalDialogOptions {
  variant?: GlobalDialogVariant;
  className?: string;
  maxWidth?: string; // e.g. "max-w-2xl"
}

interface GlobalDialogState {
  isOpen: boolean;
  view: ReactNode | null;
  options: GlobalDialogOptions;
  open: (view: ReactNode, options?: GlobalDialogOptions) => void;
  close: () => void;
}

export const useGlobalDialogStore = create<GlobalDialogState>((set) => ({
  isOpen: false,
  view: null,
  options: {},
  open: (view, options = {}) =>
    set({
      isOpen: true,
      view,
      options,
    }),
  close: () => set({ isOpen: false }),
}));
