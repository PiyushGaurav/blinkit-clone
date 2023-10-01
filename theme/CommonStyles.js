import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const hitSlopProp = {
	top: 12,
	right: 12,
	left: 12,
	bottom: 12
};

export default StyleSheet.create({
	flex: {
		flex: 1
	},
	flexCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loader: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},

	shadowStyle: {
		borderRadius: 4,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.49,

		elevation: 12
	},

	viewStyles: {
		flex: 1,
		justifyContent: 'center'
	},

	navHeaderStyle: {
		headerStyle: {
			backgroundColor: Colors.yellow
		},
		headerTintColor: Colors.black,
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}
});
