import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth, app, firebaseConfig } from '../../utils/firebaseUtils';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { Colors, Fonts } from '../../theme';
import { useAuthStore } from '../../store/authStore';

const otp = () => {
	const recaptchaVerifier = useRef(null);
	const setToken = useAuthStore(state => state.setToken);
	const [verificationCode, setVerificationCode] = useState('');
	const [timerCount, setTimer] = useState(30);
	const [enableResendButton, setEnableResendButton] = useState(false);
	const { phoneNumber } = useLocalSearchParams();
	const [verificationId, setVerificationId] = useState(useLocalSearchParams().verificationId);
	const [message, showMessage] = useState(null);

	useEffect(() => {
		let interval = setInterval(() => {
			setTimer(lastTimerCount => {
				lastTimerCount <= 1 && clearInterval(interval);
				if (lastTimerCount <= 1) {
					setEnableResendButton(true);
				}
				return lastTimerCount - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const validateOTP = async code => {
		setVerificationCode('');
		try {
			const credential = PhoneAuthProvider.credential(verificationId, code);
			const token = await signInWithCredential(auth, credential);
			console.log(token);
			showMessage({ text: 'Phone authentication successful 👍' });
			setToken(token._tokenResponse);
		} catch (err) {
			showMessage({ text: `Error: ${err.message}`, color: 'red' });
		}
	};

	const resendVerificationCode = async () => {
		try {
			const phoneProvider = new PhoneAuthProvider(auth);
			const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
			setVerificationId(verificationId);
			showMessage({
				text: 'Verification code has been sent to your phone.'
			});
		} catch (err) {
			showMessage({ text: `Error: ${err.message}`, color: 'red' });
		}
	};

	return (
		<View style={styles.container}>
			<FirebaseRecaptchaVerifierModal
				ref={recaptchaVerifier}
				firebaseConfig={firebaseConfig}
				// attemptInvisibleVerification
			/>
			<Text style={styles.title}>We've sent verification code to</Text>
			<Text style={styles.subTitle}>{phoneNumber}</Text>
			<OTPInputView
				style={{ width: '80%', height: 100, alignSelf: 'center' }}
				pinCount={6}
				code={verificationCode}
				onCodeChanged={verificationCode => {
					setVerificationCode(verificationCode);
				}}
				autoFocusOnLoad
				codeInputFieldStyle={styles.codeInputFieldStyle}
				codeInputHighlightStyle={styles.codeInputHighlightStyle}
				onCodeFilled={code => {
					console.log(`Code is ${code}, you are good to go!`);
					validateOTP(code);
				}}
			/>
			<TouchableOpacity disabled={!enableResendButton} onPress={resendVerificationCode}>
				<Text
					style={[styles.resendText, { color: enableResendButton ? Colors.red : Colors.lightGrey }]}
				>{`Resend OTP in ${timerCount} sec`}</Text>
			</TouchableOpacity>
			{!!message && (
				<Text
					style={{
						color: Colors.red,
						fontSize: 17,
						textAlign: 'center',
						margin: 20
					}}
				>
					{message.text}
				</Text>
			)}
		</View>
	);
};

export default otp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white
	},
	title: {
		textAlign: 'center',
		...Fonts.regular(14),
		marginTop: 25,
		marginBottom: 5
	},
	subTitle: {
		textAlign: 'center',
		...Fonts.medium(14)
	},
	borderStyleBase: {
		width: 45,
		height: 50,
		borderColor: Colors.black,
		borderWidth: 0.5
	},

	borderStyleHighLighted: {
		borderColor: Colors.black,
		borderWidth: 1
	},
	codeInputFieldStyle: {
		width: 45,
		height: 50,
		borderRadius: 10,
		color: Colors.black
	},
	resendText: {
		...Fonts.bold(14),
		textAlign: 'center'
	}
});
