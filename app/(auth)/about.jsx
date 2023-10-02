import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors, CommonStyles, Fonts } from '../../theme';

const about = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/welcome.png')} style={styles.appLogo} />
			<Text style={styles.title}>BlinkIt Clone</Text>
			<Text style={styles.subtitle}>v1.0.0</Text>
		</View>
	);
};

export default about;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	appLogo: {
		width: 60,
		height: 60,
		borderRadius: 16,
		backgroundColor: Colors.yellow,
		alignSelf: 'center',
		marginTop: 50,
		marginVertical: 20
	},
	title: {
		...Fonts.medium(22),
		margin: 16
	},
	subtitle: {
		...Fonts.regular(16),
		margin: 16
	}
});
