import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import GeoLocation from './screens/GeoLocation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  GeoLocation: {
    screen: GeoLocation,
  },
});

export default createAppContainer(AppNavigator);
