import { create } from 'zustand';

interface EditorState {
  isEditing: boolean;
  content: string; // Placeholder for now, will likely be specific CRDT structure or JSON
  setEditing: (isEditing: boolean) => void;
  setContent: (content: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  isEditing: false,
  content: '',
  setEditing: (isEditing) => set({ isEditing }),
  setContent: (content) => set({ content }),
}));
