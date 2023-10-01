import { ActivityIndicator, View } from 'react-native';
import Colors from '../theme/Colors';

const Loader = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<ActivityIndicator size="large" color={Colors.skyblue} />
		</View>
	);
};

export default Loader;
