export const productKeyFactory = {
	categories: ['all-categories'],
	products: ['all-products'],
	productById: id => [...productKeyFactory.products, id],
	productByCategories: id => [...productKeyFactory.categories, id]
};
