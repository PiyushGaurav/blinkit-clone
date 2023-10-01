import { useProductStore } from '../store/cartStore';

export const getBasketTotalPrice = product => {
	const { productsInBasket } = useProductStore();
	return productsInBasket.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0).toFixed(2);
};
