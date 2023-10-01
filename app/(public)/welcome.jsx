import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { router } from 'expo-router';
import { ButtonComp } from '../../components';
import { Colors, CommonStyles, Fonts } from '../../theme';

const welcome = () => {
	return (
		<View style={CommonStyles.flex}>
			<View style={styles.headerImage}></View>
			<View style={styles.content}>
				<View style={styles.appLogo} />
				<Text style={styles.title}>India's last minute app</Text>
				<Text style={styles.subTitle}>Log in or Sign up</Text>
				<ButtonComp
					btnText={'Login with Phone Number'}
					onPress={() => {
						router.push('/login');
					}}
				/>
			</View>
			<Text style={styles.footerText}>By continuing, you agree to our Terms of services & Privacy Policy</Text>
		</View>
	);
};

export default welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerImage: { flex: 1 },
	content: {
		backgroundColor: 'white',
		margin: 16,
		borderRadius: 15
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
