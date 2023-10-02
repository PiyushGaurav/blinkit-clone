import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
	authToken: null,
	setToken: token => set({ authToken: token }),
	removeToken: () => set({ authToken: null })
}));
