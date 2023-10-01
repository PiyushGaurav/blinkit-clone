import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../axios.instance';
import { productKeyFactory } from './key-factory';

export const getProductById = async productId => {
	return (await api.get(`/products/${productId}`)).data;
};

export const useGetProductById = (productId, options) => {
	return useQuery({
		queryFn: () => getProductById(productId),
		queryKey: [...productKeyFactory.productById(productId)],
		...options
	});
};
