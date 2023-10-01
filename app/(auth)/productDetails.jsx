import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Fonts, CommonStyles, Colors } from '../../theme';
import { useLocalSearchParams, router } from 'expo-router';
import { useGetProductById } from '../../api/product';
import { ScrollView } from 'react-native-gesture-handler';
import { AbsoluteCloseButton, AddToCartButton } from '../../components';

const { width, height } = Dimensions.get('window');
const ProductList = () => {
	const { productId } = useLocalSearchParams();
	console.log('ProductList ID', productId);
	const { data, isLoading, refetch, isError, isSuccess } = useGetProductById(productId);

	return (
		<View style={styles.mainContainer}>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			<AbsoluteCloseButton onPress={() => router.back()} />
			{isSuccess && (
				<View style={styles.detailsContainer}>
					<Image source={{ uri: data.image }} style={styles.img} />
					<View style={styles.content}>
						<Text style={styles.title}>{data.title}</Text>
						<Text style={styles.description}>{data.description}</Text>
						<View style={styles.btnView}>
							<Text style={styles.price}>{`₹${data.price}`}</Text>
							<AddToCartButton btnStyle={styles.btnStyle} btnTextStyle={styles.btnTextStyle} onPress={() => {}} />
						</View>
					</View>
				</View>
			)}
		</View>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'flex-end'
	},
	detailsContainer: {
		flex: 0.9,
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
	}
});
