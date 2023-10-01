import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../theme';

const AddToCartButton = ({ onPress = () => {}, btnTextStyle = {}, btnStyle = {} }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[{ ...styles.btn, ...btnStyle }]}>
			<Text style={[{ ...styles.btnText, ...btnTextStyle }]}>Add</Text>
		</TouchableOpacity>
	);
};

export default AddToCartButton;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: Colors.lightGreen,
		borderWidth: 0.4,
		borderColor: Colors.green,
		borderRadius: 5,
		width: 60,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnText: {
		...Fonts.bold(12),
		textTransform: 'uppercase',
		color: Colors.green
	}
});
