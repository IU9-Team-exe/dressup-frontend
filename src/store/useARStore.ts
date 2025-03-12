import {create} from "zustand";

interface ARState {
    selectedModel: string;
    setModel: (model: string) => void;
}

export const useARStore = create<ARState>((set) => ({
    selectedModel: "",
    setModel: (model) => set({selectedModel: model}),
}));
