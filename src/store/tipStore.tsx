import { create } from 'zustand';

type Tip = {
  id: string;
  author: string;
  description: string;
  status: 'leído' | 'no leído';
  creationDate: string;
};

type TipStore = {
  tips: Tip[];
  addTip: (tip: Tip) => void;
  updateTip: (id: string, updatedTip: Partial<Tip>) => void;
  deleteTip: (id: string) => void;
  searchQuery: string; // Estado adicional para la búsqueda
  setSearchQuery: (query: string) => void; // Función para actualizar la búsqueda
};

const useTipStore = create<TipStore>((set, get) => ({
  tips: [],
  searchQuery: '', // Inicializar el query de búsqueda
  addTip: (tip) => set((state) => ({ tips: [...state.tips, tip] })),
  updateTip: (id, updatedTip) => set((state) => ({
    tips: state.tips.map(tip => tip.id === id ? { ...tip, ...updatedTip } : tip)
  })),
  deleteTip: (id) => set((state) => ({
    tips: state.tips.filter(tip => tip.id !== id)
  })),
  setSearchQuery: (query) => set({ searchQuery: query }), // Actualiza el query
}));

export default useTipStore;
