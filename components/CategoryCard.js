import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '../theme';

const { width, height } = Dimensions.get('window');
const CategoryCard = data => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.img}></View>
			<View style={styles.details}>
				<Text numberOfLines={2} style={styles.title}>
					{data.data.item}
				</Text>
			</View>
		</View>
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
