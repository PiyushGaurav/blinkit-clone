import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useProductActions, useProductStore } from '../../store/cartStore';
import { Colors, CommonStyles } from '../../theme';
import QuantityButton from '../../components/QuantityButton';

const checkout = () => {
	const { productsInBasket } = useProductStore();
	const {
		increaseProductQuantityInBasket,
		decreaseProductQuantityInBasket,
		removeProductFromBasket,
		resetAllProductsInBasket
	} = useProductActions();

	let data = productsInBasket;

	const renderCartItem = elementInArray => {
		console.log('elementInArray', elementInArray);
		const { image, title, price, description, category, id } = elementInArray.product.data.item;
		if (elementInArray.quantity <= 0) {
			return null;
		}
		return (
			<View style={styles.cartItemContainer} key={id}>
				<Image source={{ uri: image }} style={styles.img}></Image>
				<View style={styles.itemDetail}>
					<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
						{title}
					</Text>
					<Text style={styles.desc}>{category}</Text>
					<Text style={styles.price}>{`$${price}`}</Text>
				</View>

				<QuantityButton
					onIncrease={() => increaseProductQuantityInBasket(id)}
					onDecrease={() => {
						if (elementInArray.quantity == 1) {
							removeProductFromBasket(id);
						} else {
							decreaseProductQuantityInBasket(id);
						}
					}}
					quantity={elementInArray.quantity}
				/>
			</View>
		);
	};

	return (
		<View style={CommonStyles.flex}>
			{productsInBasket.length == 0 && <Text style={styles.emptyText}>Cart is empty</Text>}

			<ScrollView>
				<View style={styles.cartListView}>
					{productsInBasket.map((elementInArray, index) => {
						return renderCartItem(elementInArray);
					})}
				</View>
			</ScrollView>
		</View>
	);
};

export default checkout;

const styles = StyleSheet.create({
	cartListView: {
		backgroundColor: Colors.white,
		margin: 16,
		borderRadius: 15
	},
	cartItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 16
	},
	img: {
		width: 70,
		height: 70,
		borderWidth: 0.5,
		borderColor: Colors.lightGrey,
		borderRadius: 15,
		resizeMode: 'contain',
		backgroundColor: Colors.white
	},
	itemDetail: {
		flex: 0.9,
		justifyContent: 'space-between',
		marginLeft: 16
	},
	title: {
		textTransform: 'capitalize',
		...Fonts.medium(16)
	},
	desc: {
		...Fonts.regular(12)
	},
	price: {
		...Fonts.medium(14)
	},
	emptyText: {
		marginVertical: 30,
		...Fonts.medium(18),
		textAlign: 'center'
	}
});
