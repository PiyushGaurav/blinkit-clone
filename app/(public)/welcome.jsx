import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { router } from 'expo-router';

const welcome = () => {
	return (
		<View>
			<Text>welcome</Text>
			<Button
				onPress={() => {
					router.push('/login');
				}}
				title="Login with Phone Number"
			/>
		</View>
	);
};

export default welcome;

const styles = StyleSheet.create({});
