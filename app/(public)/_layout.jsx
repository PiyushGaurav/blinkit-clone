import React from 'react';
import { Stack } from 'expo-router';

const PublicLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#6c47ff'
				},
				headerTintColor: '#fff',
				headerBackTitle: 'Back'
			}}
		>
			<Stack.Screen
				name="welcome"
				options={{
					headerTitle: 'BlinkIt'
				}}
			/>
			<Stack.Screen
				name="login"
				options={{
					headerShown: false,
					presentation: 'transparentModal'
				}}
			/>
			<Stack.Screen
				name="otp"
				options={{
					headerTitle: 'Enter OTP'
				}}
			/>
		</Stack>
	);
};

export default PublicLayout;
