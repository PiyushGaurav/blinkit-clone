import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useStore } from '../store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import CartView from '../components/CartView';

export const queryClient = new QueryClient();

const RootLayout = () => {
	const token = useStore(state => state.authToken);

	const InitialLayout = () => {
		const segments = useSegments();
		const router = useRouter();

		useEffect(() => {
			const inTabsGroup = segments[0] === '(auth)';

			console.log('User changed: ', token);

			// if (token && !inTabsGroup) {
			// 	router.replace('/home');
			// } else if (!token) {
			// 	router.replace('/welcome');
			// }
			router.replace('/(auth)/home');
		}, [token]);

		return <Slot />;
	};

	return (
		<QueryClientProvider client={queryClient}>
			<InitialLayout />
			<CartView />
		</QueryClientProvider>
	);
};

export default RootLayout;
