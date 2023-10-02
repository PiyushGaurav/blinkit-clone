import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, CommonStyles, Fonts } from '../theme';

const ButtonComp = ({ onPress = () => {}, btnText = '', btnTextStyle = {}, btnStyle = {}, disabled = false }) => {
	return (
		<TouchableOpacity
			style={[{ ...styles.btnStyle, backgroundColor: disabled ? Colors.grey : Colors.green, ...btnStyle }]}
			disabled={disabled}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<Text style={[{ ...styles.btnTextStyle, ...btnTextStyle }]}>{btnText}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	btnStyle: {
		backgroundColor: Colors.red,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 8,
		margin: 16,
		height: 50,
		borderRadius: 10
	},
	btnTextStyle: {
		color: Colors.white,
		padding: 10,
		...Fonts.medium(16),
		fontWeight: '600'
	}
});

export default ButtonComp;
