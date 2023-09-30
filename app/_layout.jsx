import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';

export const AuthContext = React.createContext({
	token: false
});

const RootLayout = () => {
	const [token, setToken] = useState(null);

	const InitialLayout = () => {
		const segments = useSegments();
		const router = useRouter();

		useEffect(() => {
			const inTabsGroup = segments[0] === '(auth)';

			console.log('User changed: ', token);

			if (token && !inTabsGroup) {
				router.replace('/home');
			} else if (!token) {
				router.replace('/welcome');
			}
		}, [token]);

		return <Slot />;
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken
			}}
		>
			<InitialLayout />
		</AuthContext.Provider>
	);
};

export default RootLayout;
