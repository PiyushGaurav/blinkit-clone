import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import CartView from '../components/CartView';
import { useAuthStore } from '../store/authStore';

export const queryClient = new QueryClient();

const RootLayout = () => {
	const user = useAuthStore(state => state.authToken);

	const InitialLayout = () => {
		const router = useRouter();
		const segments = useSegments();

		useEffect(() => {
			const inTabsGroup = segments[0] === '(auth)';

			console.log('User changed: ', user?.idToken);
			console.log('Root layout', user);

			if (user?.idToken && !inTabsGroup) {
				router.replace('/home');
			} else if (!user?.idToken) {
				router.replace('/welcome');
			}
		}, [user]);

		return (
			<>
				<Slot />
				{segments[0] !== '(auth)/checkout' && <CartView />}
			</>
		);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<InitialLayout />
		</QueryClientProvider>
	);
};

export default RootLayout;
