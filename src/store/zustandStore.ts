import { dummyContents } from "@/lib/dummyData";
import { GeneratedContent } from "@/types/content";
import { create } from "zustand";

export type Store = {
  generatedContents: GeneratedContent[];
  addedGeneratedContent: (generatedContent: GeneratedContent) => void;
};

const useStore = create<Store>((set) => ({
  generatedContents: [...dummyContents],
  addedGeneratedContent: (generateContent) =>
    set((state) => ({
      generatedContents: [...state.generatedContents, generateContent],
    })),
}));

export default useStore;
