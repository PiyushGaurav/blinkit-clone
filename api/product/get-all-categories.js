import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../axios.instance';
import { productKeyFactory } from './key-factory';

export const getAllCategories = async () => {
	return (await api.get('/products/categories')).data;
};

export const useGetAllCategories = options => {
	return useQuery({
		queryKey: [...productKeyFactory.categories],
		queryFn: getAllCategories,
		...options
	});
};
