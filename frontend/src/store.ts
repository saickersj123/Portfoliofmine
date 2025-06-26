import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
import { jobTitles } from './lib/utils'

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
  
  // Job title transition state
  currentTitleIndex: number
  nextTitleIndex: number
  isTransitioning: boolean
  isPhaseTwo: boolean
  isTitleVisible: boolean
  startTransitionCycle: () => void
  getCurrentJobTitle: () => typeof jobTitles[0] | null
  getNextJobTitle: () => typeof jobTitles[0] | null
}

export const appStore = createStore<AppState>((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  
  // Job title transition state
  currentTitleIndex: 0,
  nextTitleIndex: 1,
  isTransitioning: false,
  isPhaseTwo: false,
  isTitleVisible: true,
  
  startTransitionCycle: () => {
    // Phase 1: Start transition (current title fades out)
    set({ isTransitioning: true, isPhaseTwo: false, isTitleVisible: false })
    
    // Phase 2: Show next title (500ms later - slower collapse)
    setTimeout(() => {
      set({ isTransitioning: true, isPhaseTwo: true, isTitleVisible: false })
    }, 500)
    
    // Make title visible (750ms - slower appearance)
    setTimeout(() => {
      set({ isTransitioning: true, isPhaseTwo: true, isTitleVisible: true })
    }, 750)
    
    // Complete transition (1000ms total - slower overall)
    setTimeout(() => {
      const { nextTitleIndex } = get()
      set({
        currentTitleIndex: nextTitleIndex,
        nextTitleIndex: (nextTitleIndex + 1) % jobTitles.length,
        isTransitioning: false,
        isPhaseTwo: false,
        isTitleVisible: true
      })
    }, 1000)
  },
  
  getCurrentJobTitle: () => {
    const { currentTitleIndex } = get()
    return jobTitles[currentTitleIndex] || null
  },
  
  getNextJobTitle: () => {
    const { nextTitleIndex } = get()
    return jobTitles[nextTitleIndex] || null
  }
}))

export const useAppStore = <T>(selector: (state: AppState) => T) =>
  useStore(appStore, selector)
