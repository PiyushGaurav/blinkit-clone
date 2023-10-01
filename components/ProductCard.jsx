import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts } from '../theme';
import { router } from 'expo-router';
import AddToCartButton from './AddToCartButton';

const { width, height } = Dimensions.get('window');
const ProductCard = data => {
	const { title, image, id, price } = data.data.item;
	return (
		<TouchableOpacity
			onPress={() => {
				router.push({
					pathname: '/productDetails',
					params: {
						productId: id
					}
				});
			}}
			style={styles.cardContainer}
		>
			<Image source={{ uri: image }} style={styles.img} />
			<View style={styles.details}>
				<Text numberOfLines={2} style={styles.title}>
					{title}
				</Text>
				<View style={styles.btnView}>
					<Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
					<AddToCartButton onPress={() => {}} />
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		width: width / 3.5,
		maxWidth: width / 3.5,
		borderRadius: 10,
		margin: 10,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	img: {
		backgroundColor: Colors.lightGrey,
		width: width / 3.5,
		height: width / 3.5,
		borderRadius: 15,
		resizeMode: 'contain',
		backgroundColor: Colors.white,
		borderWidth: 0.2,
		borderColor: Colors.green
	},
	details: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		marginVertical: 5,
		flexWrap: 'wrap',
		textTransform: 'capitalize',
		...Fonts.regular(13),
		textAlign: 'left'
	},
	price: {
		...Fonts.bold(10),
		textAlign: 'left'
	},
	btnView: {
		width: width / 3.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});
