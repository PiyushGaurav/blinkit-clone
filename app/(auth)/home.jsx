import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, RefreshControl } from 'react-native';
import { useStore } from '../../store/store';
import CommonStyles from '../../theme/CommonStyles';
import { CategoryList, ProductList } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetAllCategories } from '../../api/product';
import useRefreshByUser from '../../customHook/useRefreshByUser';

const home = () => {
	const setToken = useStore(state => state.setToken);

	const { data, isLoading, refetch, isError, isSuccess } = useGetAllCategories();
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	return (
		<SafeAreaView style={CommonStyles.flex}>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			{isSuccess && (
				<ScrollView refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}>
					<CategoryList />
				</ScrollView>
			)}
		</SafeAreaView>
	);
};

export default home;

const styles = StyleSheet.create({});
