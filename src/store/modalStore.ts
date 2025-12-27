import { create } from 'zustand';

type ModalType = 'contact' | null;

interface ModalState {
  modalType: ModalType;
  isOpen: boolean;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  isOpen: false,
  openModal: (type) => set({ isOpen: true, modalType: type }),
  closeModal: () => set({ isOpen: false, modalType: null }),
}));