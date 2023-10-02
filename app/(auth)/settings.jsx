import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { ButtonComp } from '../../components';
import { Colors, CommonStyles, Fonts } from '../../theme';
import { useAuthStore } from '../../store/authStore';
import { useProductStore } from '../../store/cartStore';
import { router } from 'expo-router';

const settings = () => {
	const setToken = useAuthStore(state => state.setToken);
	const { resetAllProductsInBasket } = useProductStore();
	const user = useAuthStore(state => state.authToken);

	const settingListItem = (path, title, onPress) => {
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					margin: 16
				}}
			>
				<View
					style={{
						width: 30,
						height: 30,
						borderRadius: 15,
						backgroundColor: Colors.lightGrey,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image
						source={path}
						style={{
							width: 20,
							height: 20,
							resizeMode: 'contain',
							tintColor: 'grey'
						}}
					/>
				</View>
				<Text style={{ flex: 1, marginLeft: 16, ...Fonts.regular(18) }}>{title}</Text>
				<View
					style={{
						width: 30,
						height: 30,
						borderRadius: 15,
						backgroundColor: Colors.white,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image
						source={require('../../assets/right.png')}
						style={{
							width: 20,
							height: 20,
							resizeMode: 'contain',
							tintColor: 'grey'
						}}
					/>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={CommonStyles.flex}>
			<Text style={styles.title}>My Account</Text>
			<Text style={styles.number}>{user?.phoneNumber}</Text>

			{settingListItem(require('../../assets/info.png'), 'About Us', () => {
				router.push('(auth)/about');
			})}
			{settingListItem(require('../../assets/logout.png'), 'Log out', () => {
				setToken(null);
				resetAllProductsInBasket();
			})}
			<SafeAreaView style={{ flex: 0 }} />
		</View>
	);
};

export default settings;

const styles = StyleSheet.create({
	title: {
		...Fonts.medium(22),
		margin: 16
	},
	number: {
		...Fonts.regular(16),
		margin: 16
	}
});
