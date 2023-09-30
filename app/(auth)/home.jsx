import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../_layout';

const home = () => {
	const { setToken } = useContext(AuthContext);

	return (
		<View>
			<Text>home</Text>
			<Button
				onPress={() => {
					setToken(null);
				}}
				title="Logout"
			/>
		</View>
	);
};

export default home;

const styles = StyleSheet.create({});
