import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, Dimensions } from 'react-native';
import { useGetProductByCategoryId } from '../../api/product';
import { Fonts, CommonStyles, Colors } from '../../theme';
import { useLocalSearchParams } from 'expo-router';
import { Loader, ProductCard } from '../../components';
import useRefreshByUser from '../../customHook/useRefreshByUser';

const ProductList = () => {
	const { categoryId } = useLocalSearchParams();
	const { data, isLoading, refetch, isError, isSuccess } = useGetProductByCategoryId(categoryId);
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	const renderItem = item => {
		return <ProductCard data={item} />;
	};

	const getKeyExtractor = item => item.index + Math.random(100).toString();

	if (isLoading) {
		return (
			<View style={{ height: Dimensions.get('window').height }}>
				<Loader />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{isError && (
				<View style={CommonStyles.flexCenter}>
					<Text>An error occurred</Text>
				</View>
			)}
			{isSuccess && (
				<FlatList
					data={data}
					refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
					renderItem={renderItem}
					keyExtractor={getKeyExtractor}
					style={CommonStyles.flex}
					numColumns={3}
				/>
			)}
		</View>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: Colors.white
	},
	title: {
		...Fonts.bold(14),
		marginHorizontal: 10
	}
});
