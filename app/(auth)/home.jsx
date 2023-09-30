import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useStore } from '../../store/store';

const home = () => {
	const setToken = useStore(state => state.setToken);

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
