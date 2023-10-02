import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState, useRef } from 'react';
import { router } from 'expo-router';
import { PhoneAuthProvider } from 'firebase/auth';
import { auth, app, firebaseConfig } from '../../utils/firebaseUtils';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { AbsoluteCloseButton, ButtonComp } from '../../components';
import { Colors, CommonStyles, Fonts } from '../../theme';

const login = () => {
	const recaptchaVerifier = useRef(null);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [verificationId, setVerificationId] = useState();
	const [message, showMessage] = useState(null);

	const sendVerificationCode = async () => {
		try {
			const phoneProvider = new PhoneAuthProvider(auth);
			const verificationId = await phoneProvider.verifyPhoneNumber(`+91${phoneNumber}`, recaptchaVerifier.current);
			setVerificationId(verificationId);
			showMessage({
				text: 'Verification code has been sent to your phone.'
			});
			router.replace({ pathname: '/otp', params: { phoneNumber: `+91${phoneNumber}`, verificationId } });
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

			<AbsoluteCloseButton onPress={() => router.back()} />

			<View style={styles.content}>
				<Text style={styles.subTitle}>Log in or Sign up</Text>
				<View
					style={{
						flexDirection: 'row',
						borderWidth: 1,
						alignItems: 'center',
						margin: 16,
						borderRadius: 10,
						borderColor: Colors.grey
					}}
				>
					<Text style={{ ...Fonts.bold(16), paddingLeft: 16, paddingHorizontal: 5 }}>+91</Text>
					<TextInput
						style={{
							height: 50,
							borderColor: 'gray',
							...Fonts.medium(16),
							placeholderTextColor: 'gray'
						}}
						onChangeText={text => setPhoneNumber(text)}
						value={phoneNumber}
						keyboardType={'number-pad'}
						placeholder="Enter mobile number"
					/>
				</View>

				<ButtonComp btnText={'Continue'} disabled={phoneNumber.length !== 10} onPress={sendVerificationCode} />
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
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'flex-end'
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
