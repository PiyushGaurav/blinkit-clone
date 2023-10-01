import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../axios.instance';
import { productKeyFactory } from './key-factory';

export const getProductByCategoryId = async categoryId => {
	return (await api.get(`/products/category/${categoryId}`)).data;
};

export const useGetProductByCategoryId = (categoryId, options) => {
	return useQuery({
		queryFn: () => getProductByCategoryId(categoryId),
		queryKey: [...productKeyFactory.productByCategories(categoryId)],
		...options
	});
};
