import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../theme/CommonStyles';
import { Fonts } from '../theme/Fonts';
import Colors from '../theme/Colors';

const ButtonComp = ({ onPress = () => {}, btnText = '', btnTextStyle = {}, btnStyle = {} }) => {
	return (
		<TouchableOpacity style={[{ ...styles.btnStyle, ...btnStyle }]} activeOpacity={0.8} onPress={onPress}>
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
		...CommonStyles.shadowStyle,
		margin: 16,
		height: 40
	},
	btnTextStyle: {
		color: Colors.white,
		padding: 10,
		...Fonts.medium(14)
	}
});

export default ButtonComp;
