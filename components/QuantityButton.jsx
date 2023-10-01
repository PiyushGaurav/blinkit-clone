import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../theme';

const QuantityButton = ({
	onIncrease = () => {},
	onDecrease = () => {},
	quantity,
	qtyContainer = {},
	qtyButtonTextStyle = {},
	qtyTextStyle = {}
}) => {
	const renderQtyButton = (styles, isIncrease) => {
		const { buttonStyle, buttonTextStyle } = styles;
		const sign = isIncrease ? '\u002B' : '\u2212';
		return (
			<TouchableOpacity style={buttonStyle} onPress={isIncrease ? onIncrease : onDecrease}>
				<Text style={[{ ...buttonTextStyle, ...qtyButtonTextStyle }]}>{sign}</Text>
			</TouchableOpacity>
		);
	};

	const renderTitleText = () => {
		return <Text style={[{ ...styles.qtyTextStyle, ...qtyTextStyle }]}>{quantity}</Text>;
	};

	return (
		<View style={[{ ...styles.container, ...qtyContainer }]}>
			{renderQtyButton(styles, false)}
			{renderTitleText(styles.qtyTextStyle)}
			{renderQtyButton(styles, true)}
		</View>
	);
};

export default QuantityButton;

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 25,
		justifyContent: 'space-between',
		overflow: 'hidden',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: Colors.green
	},
	qtyTextStyle: {
		...Fonts.bold(12),
		color: Colors.white
	},

	buttonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonTextStyle: {
		...Fonts.medium(16),
		color: Colors.white
	}
});
