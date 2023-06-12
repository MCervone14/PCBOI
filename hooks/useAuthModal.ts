import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  toggleAuthModal: () => void;
  onClose: () => void;
  onOpen: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  toggleAuthModal: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useAuthModal;
