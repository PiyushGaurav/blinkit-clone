import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../_layout';

const otp = () => {
	const { setToken } = useContext(AuthContext);
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
