import { create } from 'zustand'

interface UIState {
  isIntroDone: boolean
  setIntroDone: (done: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isIntroDone: false,
  setIntroDone: (done) => set({ isIntroDone: done }),
}))