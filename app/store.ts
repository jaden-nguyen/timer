import { create } from "zustand";

interface TimerState {
  pause: boolean;
  handlePlaying: () => void;
  time: string;
  updateTime: (time: string) => void;
}

export const useStore = create<TimerState>()((set) => ({
  pause: true,
  time: "00:00",
  handlePlaying: () => set((state) => ({ pause: state.pause ? false : true })),
  updateTime: () => set((state) => ({ time: state.time })),
}));
