import { StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { Fonts } from '../../theme/Fonts';
import CommonStyles from '../../theme/CommonStyles';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonComp from '../../components/ButtonComp';

const login = () => {
	const [phone, setPhone] = useState('');
	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
			<TouchableOpacity onPress={() => router.back()} style={styles.closeIconView}>
				<Text>x</Text>
			</TouchableOpacity>
			<View style={styles.content}>
				<Text style={styles.subTitle}>Log in or Sign up</Text>
				<TextInputWithLabel
					placeholder={'Enter mobile number'}
					label={'Phone'}
					onChangeText={text => setPhone(text)}
					keyboardType={'number-pad'}
				/>
				<ButtonComp
					btnText={'Continue'}
					disabled={phone.length == 0}
					onPress={() => {
						router.replace({ pathname: '/otp', params: { phone } });
					}}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.2)',
		justifyContent: 'flex-end'
	},
	closeIconView: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 10
	},
	content: {
		height: 200,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		backgroundColor: 'white',
		width: '100%',
		justifyContent: 'flex-end',
		bottom: 0,
		justifyContent: 'center',
		...CommonStyles.shadowStyle,
		zIndex: 10
	},
	subTitle: {
		textAlign: 'center',
		...Fonts.bold(16)
	}
});
