import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useStore } from '../../store/store';
import CommonStyles from '../../theme/CommonStyles';
import { CategoryList } from '../../components';

const home = () => {
	const setToken = useStore(state => state.setToken);

	return (
		<SafeAreaView style={CommonStyles.flex}>
			<CategoryList />
		</SafeAreaView>
	);
};

export default home;

const styles = StyleSheet.create({});
