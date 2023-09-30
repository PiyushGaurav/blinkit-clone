import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../../theme/Colors';

const PublicLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.white
				},
				headerTitleStyle: {
					backgroundColor: 'red'
				},
				headerTintColor: Colors.black,
				headerBackTitleVisible: false
			}}
		>
			<Stack.Screen
				name="welcome"
				options={{
					headerShown: false
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
					headerTitle: 'OTP Verification'
				}}
			/>
		</Stack>
	);
};

export default PublicLayout;
