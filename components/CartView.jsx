import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ButtonComp from './ButtonComp';
import { Colors, CommonStyles, Fonts } from '../theme';

const CartView = () => {
	let count = 4;
	return (
		<>
			<View style={styles.container}>
				<View style={styles.overlayBoxView}>
					{[...Array(count)].map((elementInArray, index) => (
						<View key={index} style={[styles.overlayBox, { left: index * 10 }]}></View>
					))}
				</View>
				<Text style={[styles.item, { marginLeft: 10 + count * 10 }]}>{`${count} Items`}</Text>
				<ButtonComp btnText="Next" btnStyle={styles.btnStyle} btnTextStyle={styles.btnTextStyle} />
			</View>
			<SafeAreaView style={{ flex: 0 }} />
		</>
	);
};

export default CartView;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		...CommonStyles.shadowStyle,
		borderTopWidth: 0.3
	},
	overlayBoxView: { justifyContent: 'center', alignItems: 'center' },
	overlayBox: {
		position: 'absolute',
		width: 45,
		height: 45,
		backgroundColor: Colors.lightGreen,
		borderWidth: 0.2,
		borderRadius: 10
	},
	item: {
		...Fonts.medium(16)
	},
	btnStyle: {
		width: '45%',
		backgroundColor: Colors.green,
		height: 45
	},
	btnTextStyle: {
		...Fonts.bold(16)
	}
});
