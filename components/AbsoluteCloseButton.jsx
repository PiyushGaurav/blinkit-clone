import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { Colors } from '../theme';

const AbsoluteCloseButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.closeIconView}>
			<Text style={styles.close}>x</Text>
		</TouchableOpacity>
	);
};

export default AbsoluteCloseButton;

const styles = StyleSheet.create({
	closeIconView: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.black,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 10
	},
	close: {
		color: Colors.white,
		fontSize: 20,
		textTransform: 'uppercase'
	}
});
