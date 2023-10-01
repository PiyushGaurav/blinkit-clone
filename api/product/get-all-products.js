import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../axios.instance';
import { productKeyFactory } from './key-factory';

export const getAllProducts = async () => {
	return (await api.get('/products')).data;
};

export const useGetAllProducts = options => {
	return useQuery({
		queryKey: [...productKeyFactory.products],
		queryFn: getAllProducts,
		...options
	});
};
