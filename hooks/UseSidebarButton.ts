import { create } from "zustand";

interface SidebarButtonState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useSidebarButton = create<SidebarButtonState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
}));

export default useSidebarButton;
