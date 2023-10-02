import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../../theme/Colors';
import { Platform } from 'react-native';

const PrivateLayout = () => {
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
				name="home"
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="productList"
				options={{
					headerTitle: 'product List'
				}}
			/>
			<Stack.Screen
				name="productDetails"
				options={{
					headerShown: false,
					presentation: Platform.OS == 'ios' ? 'transparentModal' : 'modal'
				}}
			/>
			<Stack.Screen
				name="checkout"
				options={{
					headerTitle: 'Checkout'
				}}
			/>
			<Stack.Screen
				name="setting"
				options={{
					headerTitle: 'Setting'
				}}
			/>
		</Stack>
	);
};

export default PrivateLayout;
