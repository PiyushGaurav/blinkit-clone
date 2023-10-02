import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Fonts, CommonStyles, Colors } from '../../theme';
import { useLocalSearchParams, router } from 'expo-router';
import { useGetProductById } from '../../api/product';
import { AbsoluteCloseButton, AddToCartButton, Loader } from '../../components';
import { useProductInBasketQuantityById, useProductStore } from '../../store/cartStore';
import QuantityButton from '../../components/QuantityButton';

const { width, height } = Dimensions.get('window');
const ProductDetails = () => {
	const { productId } = useLocalSearchParams();
	const { data, isLoading, refetch, isError, isSuccess } = useGetProductById(productId);

	const {
		increaseProductQuantityInBasket,
		decreaseProductQuantityInBasket,
		removeProductFromBasket,
		addProductToBasket
	} = useProductStore();

	const productQuantity = useProductInBasketQuantityById(parseInt(productId));

	return (
		<View style={styles.mainContainer}>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			<AbsoluteCloseButton onPress={() => router.back()} />
			{isSuccess ? (
				<View style={styles.detailsContainer}>
					<Image source={{ uri: data.image }} style={styles.img} />
					<View style={styles.content}>
						<Text style={styles.title}>{data.title}</Text>
						<Text style={styles.description}>{data.description}</Text>
						<View style={styles.btnView}>
							<Text style={styles.price}>{`₹${data.price}`}</Text>
							{productQuantity !== undefined ? (
								<QuantityButton
									onIncrease={() => increaseProductQuantityInBasket(parseInt(productId))}
									onDecrease={() => {
										if (productQuantity == 1) {
											removeProductFromBasket(parseInt(productId));
										} else {
											decreaseProductQuantityInBasket(parseInt(productId));
										}
									}}
									qtyContainer={styles.qtyContainer}
									qtyTextStyle={styles.qtyTextStyle}
									qtyButtonTextStyle={styles.qtyButtonTextStyle}
									quantity={productQuantity}
								/>
							) : (
								<AddToCartButton
									btnStyle={styles.btnStyle}
									btnTextStyle={styles.btnTextStyle}
									onPress={() => {
										addProductToBasket(data);
									}}
								/>
							)}
						</View>
					</View>
				</View>
			) : (
				<View style={styles.detailsContainer}>
					<Loader />
				</View>
			)}
		</View>
	);
};

export default ProductDetails;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'flex-end'
	},
	detailsContainer: {
		// flex: 0.9,
		height: height * 0.8,
		backgroundColor: Colors.white,
		zIndex: 10,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		...CommonStyles.shadowStyle
	},
	img: {
		width: width * 0.9,
		height: width * 0.8,
		resizeMode: 'contain',
		alignSelf: 'center',
		backgroundColor: Colors.white,
		borderRadius: 15,
		marginVertical: 16,
		borderWidth: 0.2
	},
	content: {
		borderTopWidth: 0.3,
		borderColor: Colors.lightGrey,
		padding: 16
	},
	title: {
		...Fonts.bold(18),
		marginBottom: 16
	},
	description: {
		...Fonts.regular(12),
		marginBottom: 16
	},
	price: {
		...Fonts.bold(26)
	},
	btnView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	btnStyle: {
		backgroundColor: Colors.lightGreen,
		borderWidth: 0.4,
		borderColor: Colors.green,
		borderRadius: 5,
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnTextStyle: {
		...Fonts.bold(18),
		textTransform: 'uppercase',
		color: Colors.green
	},
	qtyContainer: {
		width: 100,
		height: 40
	},
	qtyTextStyle: {
		...Fonts.bold(18)
	},
	qtyButtonTextStyle: {
		...Fonts.medium(22)
	}
});
