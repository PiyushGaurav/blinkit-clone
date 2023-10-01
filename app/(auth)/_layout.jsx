import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../../theme/Colors';

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
					presentation: 'transparentModal'
				}}
			/>
		</Stack>
	);
};

export default PrivateLayout;
