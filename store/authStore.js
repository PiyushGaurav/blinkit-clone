import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
	persist(
		(set, get) => ({
			authToken: null,
			setToken: token => set({ authToken: token }),
			removeToken: () => set({ authToken: null })
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => AsyncStorage)
		}
	)
);
