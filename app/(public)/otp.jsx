import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useStore } from '../../store/store';

const otp = () => {
	const setToken = useStore(state => state.setToken);

	return (
		<View>
			<Text>OTP screen</Text>
			<Button
				onPress={() => {
					setToken('Abc@123');
				}}
				title="Sign In"
			/>
		</View>
	);
};

export default otp;

const styles = StyleSheet.create({});
