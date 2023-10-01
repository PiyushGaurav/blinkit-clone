import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ButtonComp from './ButtonComp';
import { Colors, CommonStyles, Fonts } from '../theme';
import { useProductsInBasket } from '../store/cartStore';

const CartView = () => {
	const productsInBasket = useProductsInBasket();

	console.log(productsInBasket);
	let products = productsInBasket;
	let totalItem = productsInBasket?.length || 0;
	products = products.length > 4 ? products.slice(0, 4) : products;

	if (totalItem == 0) {
		return null;
	}
	return (
		<>
			<View style={styles.container}>
				<View style={styles.overlayBoxView}>
					{products.map((elementInArray, index) => {
						return (
							<Image
								source={{ uri: index === products.length - 1 ? elementInArray.product.data.item.image : '' }}
								key={index}
								style={[styles.overlayBox, { left: index * 10 }]}
							></Image>
						);
					})}
				</View>
				<Text style={[styles.item, { marginLeft: 10 + products.length * 10 }]}>{`${totalItem} Items`}</Text>
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
