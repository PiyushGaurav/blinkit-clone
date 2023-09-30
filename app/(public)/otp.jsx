import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useStore } from '../../store/store';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ButtonComp from '../../components/ButtonComp';
import { Fonts } from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

const otp = () => {
	const setToken = useStore(state => state.setToken);
	const [code, setCode] = useState('');
	const [timerCount, setTimer] = useState(10);
	const [enableResendButton, setEnableResendButton] = useState(false);
	const { phone } = useLocalSearchParams();

	useEffect(() => {
		let interval = setInterval(() => {
			setTimer(lastTimerCount => {
				lastTimerCount <= 1 && clearInterval(interval);
				if (lastTimerCount <= 1) {
					setEnableResendButton(true);
				}
				return lastTimerCount - 1;
			});
		}, 1000); //each count lasts for a second
		//cleanup the interval on complete

		return () => clearInterval(interval);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>We've sent verification code to</Text>
			<Text style={styles.subTitle}>{phone}</Text>
			<OTPInputView
				style={{ width: '80%', height: 100, alignSelf: 'center' }}
				pinCount={4}
				code={code}
				onCodeChanged={code => {
					setCode(code);
				}}
				autoFocusOnLoad
				codeInputFieldStyle={styles.codeInputFieldStyle}
				codeInputHighlightStyle={styles.codeInputHighlightStyle}
				onCodeFilled={code => {
					console.log(`Code is ${code}, you are good to go!`);
					setToken('Abc@123');
				}}
			/>
			<TouchableOpacity disabled={!enableResendButton} onPress={() => {}}>
				<Text
					style={[styles.resendText, { color: enableResendButton ? Colors.red : Colors.lightGrey }]}
				>{`Resend OTP in ${timerCount} sec`}</Text>
			</TouchableOpacity>
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
		borderRadius: 10
	},
	resendText: {
		...Fonts.bold(14),
		textAlign: 'center'
	}
});
