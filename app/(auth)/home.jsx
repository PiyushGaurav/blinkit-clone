import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, RefreshControl, FlatList } from 'react-native';
// import { useStore } from '../../store/store';
import CommonStyles from '../../theme/CommonStyles';
import { CategoryList, ProductCard, ProductList } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetAllCategories, useGetAllProducts } from '../../api/product';
import useRefreshByUser from '../../customHook/useRefreshByUser';

const home = () => {
	// const setToken = useStore(state => state.setToken);

	const { data, isLoading, refetch, isError, isSuccess } = useGetAllProducts();
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	const renderItem = item => {
		return <ProductCard data={item} />;
	};

	const getKeyExtractor = item => item.index + Math.random(100).toString();

	return (
		<SafeAreaView style={CommonStyles.flex}>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			<ScrollView
				style={{ flex: 1 }}
				refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
			>
				<CategoryList />
				<Text style={styles.title}>All Products</Text>
				{isSuccess && (
					<FlatList
						data={data}
						testID="product-list-flat-list"
						renderItem={renderItem}
						keyExtractor={getKeyExtractor}
						style={CommonStyles.flex}
						numColumns={3}
						contentContainerStyle={{ margin: 5 }}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default home;

const styles = StyleSheet.create({
	title: {
		...Fonts.bold(14),
		marginHorizontal: 10
	}
});
