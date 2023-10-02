import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

export const updateProductQuantity = (productsInBasket, productId, updateType) => {
	return productsInBasket.map(productInBasket => {
		if (productInBasket.product.id === productId) {
			return {
				...productInBasket,
				quantity: updateType === 'increase' ? productInBasket.quantity + 1 : productInBasket.quantity - 1
			};
		}
		return productInBasket;
	});
};

export const increaseProductQuantityInBasket = (productsInBasket, productId) => {
	return updateProductQuantity(productsInBasket, productId, 'increase');
};

export const decreaseProductQuantityInBasket = (productsInBasket, productId) => {
	return updateProductQuantity(productsInBasket, productId, 'decrease');
};

export const useProductStore = create(
	persist(
		(set, get) => ({
			productsInBasket: [],

			addProductToBasket: product =>
				set({
					productsInBasket: [...get().productsInBasket, { product: product, quantity: 1 }]
				}),
			removeProductFromBasket: productId =>
				set({
					productsInBasket: [
						...get().productsInBasket.filter(productInBasket => productInBasket.product.id !== productId)
					]
				}),
			increaseProductQuantityInBasket: productId => {
				set({
					productsInBasket: increaseProductQuantityInBasket(get().productsInBasket, productId)
				});
			},
			resetAllProductsInBasket: () => set({ productsInBasket: [] }),
			decreaseProductQuantityInBasket: productId => {
				set({
					productsInBasket: decreaseProductQuantityInBasket(get().productsInBasket, productId)
				});
			}
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => AsyncStorage)
		}
	)
);

export const useProductInBasketQuantityById = productId =>
	useProductStore(
		state => state.productsInBasket.find(productInBasket => productInBasket.product.id === productId)?.quantity
	);
