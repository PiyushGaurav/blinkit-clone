export const createAuthStoreSlice = (set, get) => ({
	authToken: null,
	setToken: () => set(token => ({ authToken: token })),
	removeToken: () => set({ authToken: null })
});
