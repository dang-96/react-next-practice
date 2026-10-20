import { create } from "zustand";

type LikeState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useLikeStore = create<LikeState>((set) => ({
  count: 0,

  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrease: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  reset: () =>
    set(() => ({
      count: 0,
    })),
}));
