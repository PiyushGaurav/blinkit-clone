export const createAuthStoreSlice = (set, get) => ({
	authToken: null,
	setToken: token => set({ authToken: token }),
	removeToken: () => set({ authToken: null })
});
