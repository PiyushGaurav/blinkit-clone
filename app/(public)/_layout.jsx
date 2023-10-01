import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../../theme/Colors';
import { Platform } from 'react-native';

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
					presentation: Platform.OS == 'ios' ? 'transparentModal' : 'modal'
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
