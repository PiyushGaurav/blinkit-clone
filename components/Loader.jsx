import { ActivityIndicator, View } from 'react-native';
import Colors from '../theme/Colors';
import { CommonStyles } from '../theme';

const Loader = () => {
	return (
		<View style={{ flex: 1, margin: 50 }}>
			<ActivityIndicator size="large" color={Colors.skyblue} />
		</View>
	);
};

export default Loader;
