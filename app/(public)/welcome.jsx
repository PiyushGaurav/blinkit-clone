import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ButtonComp } from '../../components';
import { Colors, CommonStyles, Fonts } from '../../theme';

const { width, height } = Dimensions.get('window');

const welcome = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/welcome.png')} style={styles.headerImage} />
			<View style={styles.content}>
				<Image source={require('../../assets/welcome.png')} style={styles.appLogo} />
				<Text style={styles.title}>India's last minute app</Text>
				<Text style={styles.subTitle}>Log in or Sign up</Text>
				<ButtonComp
					btnStyle={{ backgroundColor: Colors.red }}
					btnText={'Login with Phone Number'}
					onPress={() => {
						router.push('/login');
					}}
				/>
			</View>
			<Text style={styles.footerText}>By continuing, you agree to our Terms of services & Privacy Policy</Text>
			<SafeAreaView style={{ flex: 0 }} />
		</View>
	);
};

export default welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow
	},
	headerImage: {
		flex: 1,
		resizeMode: 'contain',
		width
	},
	content: {
		flex: 0.4,
		backgroundColor: 'white',
		margin: 16,
		borderRadius: 15,
		...CommonStyles.shadowStyle,
		justifyContent: 'space-around'
	},
	appLogo: {
		width: 60,
		height: 60,
		borderRadius: 16,
		backgroundColor: Colors.yellow,
		alignSelf: 'center',
		marginVertical: 20
	},
	title: {
		textAlign: 'center',
		...Fonts.bold(24)
	},
	subTitle: {
		textAlign: 'center',
		...Fonts.medium(16)
	},
	footerText: {
		...Fonts.regular(10),
		backgroundColor: Colors.lightGrey,
		padding: 3,
		textAlign: 'center'
	}
});
