import { create } from 'zustand';
import { createAuthStoreSlice } from './authStore';
import { createCartStoreSlice } from './cartStore';

// import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create()((...a) => ({
	...createAuthStoreSlice(...a)
	// ...createCartStoreSlice(...a)
}));

// export const useStore = create(
// 	persist(
// 		(...a) => ({
// 			...createAuthStoreSlice(...a)
// 		}),
// 		{
// 			name: 'blinkit-store'
// 		}
// 	)
// );
