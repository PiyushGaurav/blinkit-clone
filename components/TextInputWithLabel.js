import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../theme/Colors';
import { Fonts } from '../theme/Fonts';

const TextInputWithLabel = ({ value, showLabel = false, onChangeText, placeholder, inputStyle, label, ...props }) => {
	return (
		<View style={styles.container}>
			{showLabel && <Text style={[styles.labelText]}>{label} </Text>}
			<TextInput
				style={[{ ...styles.inputStyle }]}
				value={value}
				placeholder={placeholder}
				onChangeText={onChangeText}
				{...props}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16
	},
	inputStyle: {
		...Fonts.bold(14),
		borderRadius: 5,
		height: 40,
		paddingHorizontal: 8,
		marginVertical: 16,
		borderWidth: 0.5,
		alignItems: 'center'
	},
	labelText: {
		...Fonts.medium(16),
		marginBottom: 14,
		color: 'black'
	}
});

export default TextInputWithLabel;
