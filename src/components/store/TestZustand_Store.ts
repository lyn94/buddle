import { create } from 'zustand';

interface Store {
  state: number;
  increase: () => void;
  remove: () => void;
}

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useTests = () => {
  // const bears = useBearStore((state: any) => ({
  //   state: state.bears,
  //   increase: state.increasePopulation,
  //   remove: state.removeAllBears,
  // }));
  return {
    // bears,
  };
};
