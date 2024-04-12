import { LandingStoreInterface } from 'src/interfaces/landingStoreInterface';
import { create } from 'zustand';

const useLandingStore = create<LandingStoreInterface>((set) => ({
    currentLang: 0,
    changeLanguage: (code: number) => set({ currentLang: code }),
}));

export default useLandingStore;