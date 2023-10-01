import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../theme';

const QuantityButton = ({ onIncrease, onDecrease, quantity }) => {
	const renderQtyButton = (styles, isIncrease) => {
		const { buttonStyle, buttonTextStyle } = styles;
		const sign = isIncrease ? '\u002B' : '\u2212';
		return (
			<TouchableOpacity style={buttonStyle} onPress={isIncrease ? onIncrease : onDecrease}>
				<Text style={buttonTextStyle}>{sign}</Text>
			</TouchableOpacity>
		);
	};

	const renderTitleText = qtyTextStyle => {
		return <Text style={styles.qtyTextStyle}>{quantity}</Text>;
	};

	return (
		<View style={[styles.container]}>
			{renderQtyButton(styles, false)}
			{renderTitleText(styles.qtyTextStyle)}
			{renderQtyButton(styles, true)}
		</View>
	);
};

export default QuantityButton;

const styles = StyleSheet.create({
	container: {
		width: 90,
		paddingVertical: 5,
		justifyContent: 'space-between',
		overflow: 'hidden',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.green,
		borderRadius: 10
	},
	qtyTextStyle: {
		...Fonts.medium(18),
		color: Colors.white
	},

	buttonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonTextStyle: {
		...Fonts.medium(20),
		color: Colors.white
	}
});
