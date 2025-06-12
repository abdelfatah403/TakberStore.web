import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface TranslationState {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useTranslationStore = create<TranslationState>()(
  persist(
    (set) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "translation-store",
    }
  )
);