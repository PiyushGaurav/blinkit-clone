const defaultFont = 'Roboto';

export default Fonts = {
	regular: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: '400'
			// fontFamily: `${defaultFont}-Regular`
		};
	},
	medium: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: '600'
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
