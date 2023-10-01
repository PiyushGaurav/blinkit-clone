import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts } from '../theme';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const ProductCard = data => {
	const { title, image, id } = data.data.item;
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
			<Image source={{ uri: image }} style={styles.img}></Image>
			<View style={styles.details}>
				<Text numberOfLines={2} style={styles.title}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		width: width / 4.5,
		maxWidth: width / 4.5,
		borderRadius: 10,
		margin: 10,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	img: {
		backgroundColor: Colors.skyblue,
		width: width / 4.5,
		height: width / 4.5,
		borderRadius: 15
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
		textAlign: 'center'
	}
});
