import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import CommonStyles from '../../theme/CommonStyles';
import { CategoryList, ProductCard, ProductList } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetAllProducts } from '../../api/product';
import useRefreshByUser from '../../customHook/useRefreshByUser';
import { router } from 'expo-router';

const home = () => {
	const { data, isLoading, refetch, isError, isSuccess } = useGetAllProducts();
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	const renderItem = item => {
		return <ProductCard data={item} />;
	};

	const getKeyExtractor = item => item.index + Math.random(100).toString();

	return (
		<SafeAreaView style={CommonStyles.flex}>
			<TouchableOpacity
				style={{ width: 30, height: 30, alignSelf: 'flex-end', margin: 20 }}
				onPress={() => {
					router.push('(auth)/settings');
				}}
			>
				<Image source={require('../../assets/user.png')} style={{ width: 30, height: 30 }} />
			</TouchableOpacity>
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
