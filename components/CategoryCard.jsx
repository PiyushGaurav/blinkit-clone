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
		width: width / 2.5,
		borderRadius: 10,
		margin: 10,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	details: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.lightGreen,
		width: '100%',
		height: 50,
		borderRadius: 30,
		borderWidth: 0.5,
		borderColor: Colors.green
	},
	title: {
		marginVertical: 5,
		flexWrap: 'wrap',
		textTransform: 'capitalize',
		...Fonts.bold(14),
		textAlign: 'center'
	}
});
