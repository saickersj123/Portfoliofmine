import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
}

export const appStore = createStore<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export const useAppStore = <T>(selector: (state: AppState) => T) =>
  useStore(appStore, selector)
