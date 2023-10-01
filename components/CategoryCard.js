import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '../theme';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const CategoryCard = data => {
	const { item } = data.data;
	return (
		<TouchableOpacity
			onPress={() => {
				router.push({
					pathname: '(auth)/productList',
					params: {
						categoryId: item
					}
				});
			}}
			style={styles.cardContainer}
		>
			<View style={styles.img}></View>
			<View style={styles.details}>
				<Text numberOfLines={2} style={styles.title}>
					{item}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryCard;

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		width: width / 4.5,
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
