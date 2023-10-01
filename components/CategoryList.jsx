import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, Dimensions } from 'react-native';
import { useGetAllCategories } from '../api/product/get-all-categories';
import useRefreshByUser from '../customHook/useRefreshByUser';
import CategoryCard from './CategoryCard';
import { CommonStyles, Fonts } from '../theme';
import Loader from './Loader';

const CategoryList = () => {
	const { data, isLoading, refetch, isError, isSuccess } = useGetAllCategories();
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	const renderItem = item => {
		return <CategoryCard data={item} />;
	};

	const getKeyExtractor = item => item.index;

	if (isLoading) {
		return (
			<View style={{ height: Dimensions.get('window').height }}>
				<Loader />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Shop by Categories</Text>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			{isSuccess && (
				<FlatList
					data={data}
					testID="product-list-flat-list"
					refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
					renderItem={renderItem}
					keyExtractor={getKeyExtractor}
					style={CommonStyles.flex}
					numColumns={4}
					contentContainerStyle={{ margin: 5 }}
				/>
			)}
		</View>
	);
};

export default CategoryList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 16
	},
	title: {
		...Fonts.bold(14),
		marginHorizontal: 10
	}
});
