import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const login = () => {
	return (
		<View style={{ flex: 1, marginTop: 300, backgroundColor: 'transparent' }}>
			<TouchableOpacity
				onPress={() => router.back()}
				style={{
					position: 'absolute',
					bottom: 205,
					width: 30,
					height: 30,
					borderRadius: 15,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center'
				}}
			>
				<Text>x</Text>
			</TouchableOpacity>
			<View
				style={{
					height: 200,
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,
					backgroundColor: 'white',
					width: '100%',
					position: 'absolute',
					bottom: 0,
					justifyContent: 'center'
				}}
			>
				<Text>Login</Text>
				<Button
					onPress={() => {
						router.replace('/otp');
					}}
					title="Login with Phone Number"
				/>
			</View>
		</View>
	);
};

export default login;

const styles = StyleSheet.create({});
