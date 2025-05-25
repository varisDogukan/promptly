import { dummyContents } from "@/lib/dummyData";
import { persist } from "zustand/middleware";
import { GeneratedContent } from "@/types/content";
import { create } from "zustand";

export type Store = {
  generatedContents: GeneratedContent[];
  promptCount: number;
  addedGeneratedContent: (generatedContent: GeneratedContent) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      generatedContents: [...dummyContents],
      promptCount: 0,
      addedGeneratedContent: (generatedContent) =>
        set((state) => {
          if (state.promptCount >= 3) return state;

          return {
            generatedContents: [...state.generatedContents, generatedContent],
            promptCount: state.promptCount + 1,
          };
        }),
    }),
    {
      name: "promptly-storage", // localStorage key
    }
  )
);

export default useStore;
