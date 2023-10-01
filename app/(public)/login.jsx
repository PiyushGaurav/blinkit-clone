import { StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState, useRef } from 'react';
import { router } from 'expo-router';
import { PhoneAuthProvider } from 'firebase/auth';
import { auth, app, firebaseConfig } from '../../utils/firebaseUtils';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { ButtonComp, TextInputWithLabel } from '../../components';
import { CommonStyles, Fonts } from '../../theme';

const login = () => {
	const recaptchaVerifier = useRef(null);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [verificationId, setVerificationId] = useState();
	const [message, showMessage] = useState(null);

	const sendVerificationCode = async () => {
		try {
			const phoneProvider = new PhoneAuthProvider(auth);
			const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
			setVerificationId(verificationId);
			showMessage({
				text: 'Verification code has been sent to your phone.'
			});
			router.replace({ pathname: '/otp', params: { phoneNumber, verificationId } });
		} catch (err) {
			showMessage({ text: `Error: ${err.message}`, color: 'red' });
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
			<FirebaseRecaptchaVerifierModal
				ref={recaptchaVerifier}
				firebaseConfig={firebaseConfig}
				// attemptInvisibleVerification
			/>
			<TouchableOpacity onPress={() => router.back()} style={styles.closeIconView}>
				<Text>x</Text>
			</TouchableOpacity>

			<View style={styles.content}>
				<Text style={styles.subTitle}>Log in or Sign up</Text>
				<TextInputWithLabel
					placeholder={'Enter mobile number'}
					label={'Phone'}
					onChangeText={text => setPhoneNumber(text)}
					keyboardType={'number-pad'}
				/>
				<ButtonComp
					btnText={'Continue'}
					disabled={phoneNumber.length == 0}
					// onPress={() => {
					// 	router.replace({ pathname: '/otp', params: { phone } });
					// }}
					onPress={sendVerificationCode}
				/>
				{!!message && (
					<Text
						style={{
							color: message?.color || 'blue',
							fontSize: 10,
							textAlign: 'center',
							margin: 20
						}}
					>
						{message?.text}
					</Text>
				)}
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
		height: 250,
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
