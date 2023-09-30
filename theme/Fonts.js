const defaultFont = 'Roboto';

export const Fonts = {
	regular: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: '200'
			// fontFamily: `${defaultFont}-Regular`
		};
	},
	medium: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: '400'
			// fontFamily: `${defaultFont}-Medium`
		};
	},
	bold: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: '800'
			// fontFamily: `${defaultFont}-Bold`
		};
	}
};
